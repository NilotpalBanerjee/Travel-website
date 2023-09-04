import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "./navbar";
function header1() {
  return (
    <div>
      {/*Preload*/}
      {/* <div className="preloader">
        <div className="preloader_image">
          <div className="sk-double-bounce">
            <div className="sk-child sk-double-bounce1" />
            <div className="sk-child sk-double-bounce2" />
          </div>
        </div>
      </div> */}
      <nav className="navbar navbar-expand-lg white-bg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="img/logo-colored.png" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse flex-grow-1" id="main-nav">
            
            <Navbar />

            <div className="booking-button">
              <Link to="/booking" className="btn btn-primary">
                Booking Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* end nav */}
    </div>
  );
}

export default header1;
