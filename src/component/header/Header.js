import React, { useState, useEffect } from "react";
import Search from "./Search";
import Logo from "../../asset/image/navbar/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faListAlt,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import LanguageSwitch from "./LanguageSwitch";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const changeNavBackground = () => {
    const bannerHeight = document.querySelector(".banner").clientHeight;
    if (window.scrollY >= bannerHeight - 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeNavBackground();
    window.addEventListener("scroll", changeNavBackground);
  }, []);

  const showMobileMenu = () => {
    if (window.innerWidth <= 768) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    showMobileMenu();
    window.addEventListener("resize", showMobileMenu);
  }, []);

  const menuHandler = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <nav class={navbar ? "navbar active" : "navbar"}>
        <div class="nav-container">
          <div class="nav-left nav-col">
            <Search />
          </div>
          <div className={mobileMenu ? "mobileMenu show" : "mobileMenu"}>
            <div
              onClick={menuHandler}
              className={openMenu ? "openMenu active" : "openMenu"}
            >
              <span className="menu-bar"></span>
              <span className="menu-bar"></span>
              <span className="menu-bar"></span>
            </div>
          </div>
          <div className={openMenu ? "menuOverlay active" : "menuOverlay"}>
            <div
              className={
                navbar ? "overlayContent changeColor " : "overlayContent"
              }
            >
              <Search />
              <ul className={navbar ? "menuList changeColor" : "menuList"}>
                <li onClick={menuHandler}>
                  <a href="#">Categories</a>
                </li>
                <li onClick={menuHandler}>
                  <a href="#">Brands</a>
                </li>
              </ul>
              <LanguageSwitch navbar={navbar} />
            </div>
          </div>
          <div class="nav-center nav-col">
            <a href="#">
              <img class="logo" src={Logo} alt="logo" />
            </a>
          </div>
          <div class="nav-right nav-col">
            <LanguageSwitch navbar={navbar} />
            <div className={navbar ? "icon-wrap changeColor" : "icon-wrap"}>
              <div class="icon-box">
                <a href="#" class="single-icon">
                  <FontAwesomeIcon icon={faListAlt} className="nav-icon" />
                  <span class="noti-mark">2</span>
                </a>
              </div>
              <div class="icon-box">
                <a href="#" class="single-icon">
                  <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
                </a>
              </div>
              <div class="icon-box">
                <a href="#" class="single-icon">
                  <FontAwesomeIcon icon={faBell} className="nav-icon" />
                </a>
              </div>
              <div class="icon-box">
                <a href="#" class="single-icon">
                  <FontAwesomeIcon icon={faUser} className="nav-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
