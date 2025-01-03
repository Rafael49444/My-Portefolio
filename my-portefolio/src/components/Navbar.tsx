import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function Navbar() {
      return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" >
                <div className="container">
                    <h3>Rafael M.</h3>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <>
                                {/* About Link */}
                                <li className="nav-item">
                                    <a href="#about" className="nav-link d-flex flex-column text-center">About</a>
                                </li>

                                {/* Projects Link */}
                                <li className="nav-item">
                                    <a href="#projects" className="nav-link d-flex flex-column text-center">Projects</a>
                                </li>

                                {/* Skills Link */}
                                <li className="nav-item">
                                    <a href="#skills" className="nav-link d-flex flex-column text-center">Skills</a>
                                </li>
                            </>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
