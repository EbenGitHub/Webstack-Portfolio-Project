import React, { useState } from "react";

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [filter, setFilter] = useState("all");

  const filterItems = [
    { name: "All", value: "all" },
    { name: "Pictures", value: "Pictures" },
    { name: "Decor", value: "Decor" },
    { name: "MeetSpace", value: "MeetSpace" },
    { name: "Cars", value: "Cars" },
    { name: "Food", value: "Food" },
    { name: "Beech", value: "Beech" },
    { name: "Fashion", value: "Fashion" },
    { name: "Makeup", value: "Makeup" },
  ];

  const images = [
    { name: "Pictures", src: "images/Pictures-1.jpg" },
    { name: "Decor", src: "images/Decor-1.jpg" },
    { name: "MeetSpace", src: "images/MeetSpace-1.jpg" },
    { name: "Cars", src: "images/Cars-1.jpg" },
    { name: "Food", src: "images/Food-2.jpg" },
    { name: "Beech", src: "images/Beech-1.jpg" },
    { name: "Fashion", src: "images/Fashion-2.jpg" },
    { name: "Makeup", src: "images/makeup-2.jpg" },
  ];

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleImageClick = (src, name) => {
    setSelectedImg({ src, name });
  };

  const closePreview = () => {
    setSelectedImg(null);
  };

  return (
    <div className="wrapper">
      <nav>
        <div className="items">
          {filterItems.map((item, index) => (
            <span
              key={index}
              className={`item ${filter === item.value ? "active" : ""}`}
              onClick={() => handleFilterChange(item.value)}
            >
              {item.name}
            </span>
          ))}
        </div>
      </nav>
      <div className="gallery">
        {images
          .filter((image) => filter === "all" || filter === image.name)
          .map((image, index) => (
            <div
              key={index}
              className={`image ${selectedImg?.name === image.name ? "selected" : ""}`}
              onClick={() => handleImageClick(image.src, image.name)}
            >
              <span>
                <img src={image.src} alt="" />
              </span>
            </div>
          ))}
      </div>
      {selectedImg && (
        <div className="preview-box">
          <div className="details">
            <span className="title">
              Image Category: <p>{selectedImg.name}</p>
            </span>
            <span className="icon" onClick={closePreview}>
              <i className="fas fa-times"></i>
            </span>
          </div>
          <div className="image-box">
            <img src={selectedImg.src} alt="" />
          </div>
        </div>
      )}
      {selectedImg && <div className="shadow" onClick={closePreview}></div>}
    </div>
  );
};

export default Home;