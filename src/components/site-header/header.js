import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./header.css";

const ListLink = props => (
  <li className="nav__item">
    <Link to={props.to} className="nav__link">{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header
  >
    <nav className="navbar">

      <Link
        to="/"
        className="logomark"
      >
        <span className="logo__text">eh.</span>
      </Link>

      <ul className="nav__menu">
        <ListLink to="/work">Work</ListLink>
        <ListLink to="/about">About</ListLink>
      </ul>
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
