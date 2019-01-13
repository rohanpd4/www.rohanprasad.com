import React, { Component } from "react";
import "../App.css";
import Landing from "./Landing";
class Navbar extends Component {
  constructor(props) {
    super();
    this.state = {
      className: "hideNav",
      animate: "animated"
    };
    this.showNav = this.showNav.bind(this);
  }

  showNav() {
    this.setState({
      className: this.state.className === "showNav" ? "hideNav" : "showNav",
      animate: this.state.animate === "animated" ? "" : "animated"
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="col-md-12">
            <div className="nav">
              <button className="btn-nav" onClick={this.showNav}>
                <span className="icon-bar inverted top" />
                <span className="icon-bar inverted middle" />
                <span className="icon-bar inverted bottom" />
              </button>
            </div>

            <div className={"nav-content " + this.state.className}>
              <ul className="nav-list vcenter">
                <li className="nav-item">
                  <p>
                    <a className="item-anchor" href="index.html">
                      Home
                    </a>
                  </p>
                </li>

                <li className="nav-item">
                  <p>
                    <a className="item-anchor" href="aboutme.html">
                      About Me
                    </a>
                  </p>
                </li>

                <li className="nav-item">
                  <p>
                    <a className="item-anchor" href="portfolio.html">
                      Projects & Learning
                    </a>
                  </p>
                </li>

                <li className="nav-item">
                  <p className="small">
                    <a className="item-anchor" href="contact.html">
                      Contact
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <Landing />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
