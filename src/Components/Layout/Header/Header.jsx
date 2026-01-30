import React from 'react'
import './Header.css'
import Button from '../../UI/Button/Button'

const Header = () => {
  return (
    <header className="sticky-top bg-white">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="logo" href="#">LOGO</a>

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

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link active d-flex align-items-center" aria-current="page" href="#">
                  <span className="active-dot me-1"></span>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
            </ul>
            <div className="d-flex justify-content-center nav-btn-wrap">
              <Button btnText="Contact us" className="bg-blue py-11 px-26 radius-6" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header