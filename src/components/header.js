import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./header.css";

const Header = ({ siteTitle }) => (
  <header
  >
    <nav
      // style={{
      //   margin: `0 auto`,
      //   maxWidth: 960,
      //   padding: `1.45rem 1.0875rem`,
      // }}
    >

      <Link
        to="/"
        className="logomark"
        style={{
          // color: `white`,
          textDecoration: `none`,
        }}
      >
        <span className="logo__text">eh.</span>
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
