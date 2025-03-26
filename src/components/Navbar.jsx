import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

export default function Main() {
  const [activeSection, setActiveSection] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const top = window.scrollY;

      // Toggle sticky class based on scroll position
      setIsSticky(window.scrollY > 100);

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const navlinks = document.querySelectorAll("header nav a");

    navlinks.forEach((link) => {
      if (link.getAttribute("href").includes(activeSection)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, [activeSection]);

  const handleMenuClick = () => {
    setIsMenuActive((prev) => !prev);
    console.log("Menu Active:", !isMenuActive);
  };
  
  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <i
        id="menu-icon"
        className={`bx ${isMenuActive ? "bx-x" : "bx-menu"}`}
        onClick={handleMenuClick}
      ></i>
      <a href="#home" className="logo">
        Portfolio.
      </a>

      <div className="header-div">
      <nav className={`navbar ${isMenuActive ? "active" : ""}`}>
      <a href="#home" className={activeSection === "home" ? "active" : ""}>
            Home
          </a>
          <a href="#about" className={activeSection === "about" ? "active" : ""}>
            About
          </a>
          <a
            href="#services"
            className={activeSection === "services" ? "active" : ""}
          >
            Services
          </a>
          {/* <a
            href="#portfolio"
            className={activeSection === "portfolio" ? "active" : ""}
          >
            Portfolio
          </a> */}
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </nav>
      </div>
      <button className="menu-icon">Download CV</button>
    </header>

  );
}
