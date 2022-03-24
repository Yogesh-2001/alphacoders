import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" style={{ fontSize: '25px', fontWeight: 'bolder' }} href="/">
          CricketMania
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#schedule">
                Schedules
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#news">
                Latest News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#stagg">
                Top Staggers
              </a>
            </li>

          </ul>
          <form className="d-flex">
            <button className="play-btn btn btn-light" type="submit">
              Play Here
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;