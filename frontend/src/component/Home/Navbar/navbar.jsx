import React from "react";
import { Outlet,Link } from "react-router-dom";
const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg border-bottom">
        <div className="container">
          <a className="navbar-brand " href="#">
            Paraside
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <Link to="/room" className="nav-link " href="#">
                  Room
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/RoomOffer" className="nav-link ">
                Pricing
                </Link> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default navbar;
