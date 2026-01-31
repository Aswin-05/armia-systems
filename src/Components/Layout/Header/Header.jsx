import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Header.css'
import Button from '../../UI/Button/Button'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="sticky-top bg-white">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="logo" to="/">LOGO</Link>

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
                <NavLink
                  className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}
                  to="/"
                  end
                >
                  {({ isActive }) => (
                    <>
                      {isActive && <span className="active-dot me-1"></span>}
                      Home
                    </>
                  )}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}
                  to="/about"
                >
                  {({ isActive }) => (
                    <>
                      {isActive && <span className="active-dot me-1"></span>}
                      About us
                    </>
                  )}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}
                  to="/services"
                >
                  {({ isActive }) => (
                    <>
                      {isActive && <span className="active-dot me-1"></span>}
                      Services
                    </>
                  )}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}
                  to="/blog"
                >
                  {({ isActive }) => (
                    <>
                      {isActive && <span className="active-dot me-1"></span>}
                      Blog
                    </>
                  )}
                </NavLink>
              </li>
            </ul>
            <div className="d-flex justify-content-center nav-btn-wrap">
              <Button
                btnText="Contact us"
                className="bg-blue py-11 px-26 radius-6"
                onClick={() => navigate('/contact')}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header