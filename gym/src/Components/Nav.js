import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  return (
    <MainNav>
      <div className={`navbar ${menuIcon ? "active" : ""}`}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">10</span>
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          {!menuIcon ? (
            <CgMenu
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setMenuIcon(true)}
            />
          ) : (
            <CgClose
              name="close-outline"
              className="mobile-nav-icon close-outline"
              onClick={() => setMenuIcon(false)}
            />
          )}
        </div>
      </div>
    </MainNav>
  );
};

const MainNav = styled.nav`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      .navbar-link {
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
    .mobile-navbar-btn {
      display: none;
      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: block;
    }
    .navbar {
      flex-direction: column;
      .navbar-lists {
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease-in-out;
      }
      .navbar.active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;

export default Nav;
