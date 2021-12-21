import React from 'react'

const Header = () => {
    return (
      <header>
        <div className="headerContainer">
          <div className="logoContainer">
            <img src="./assets/logo.svg" alt="logo" />
          </div>

          <div className="navAndcBtn">
            <div className="navSection">
              <ul>
                <li className="navItem">Home</li>
                <li className="navItem">Services</li>
                <li className="navItem">Expertise</li>
                <li className="navItem">Portfolio</li>
                <li className="navItem">Company</li>
                <li className="navItem">Blog</li>
              </ul>
            </div>

            <div className="btnContainer">
              <div className="btn">
                <a href="/">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header
