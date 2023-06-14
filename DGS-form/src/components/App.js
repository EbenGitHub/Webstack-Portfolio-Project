import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Home from "./pages/Home"
// import Pictures from "./pages/Pictures"
// import Food from "./pages/Food"
// import Decor from "./pages/Decor"
// import MeetSpace from "./pages/MeetSpace"
// import Cars from "./pages/Cars"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/Home" component={Home} />
              {/* <Route path="/Decor" component={Decor} />
              <Route path="/MeetSpace" component={MeetSpace} />
              <Route path="/Cars" component={Cars} />
              <Route path="/Pictures" component={Pictures} />
              <Route path="/Food" component={Food} /> */}
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
