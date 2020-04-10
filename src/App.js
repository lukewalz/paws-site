import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="sticky-top" style={{ backgroundColor: 'white' }}>
          <nav className="navbar navbar-expand-lg navbar-light justify-content-between justify-content-start">
            <Link to={"/"} className="nav-link">

              <img
                alt="logo"
                src={require("./assets/Get_your_paws_on_it-min.png")}
                className="navbar-brand image navbar-left"
              />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto" >
                <li>
                  <Link to={"/Contact"} className="nav-link">
                    {" "}
                    CONTACT US{" "}
                  </Link>
                </li>
              </ul>
            </div>

          </nav>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;
