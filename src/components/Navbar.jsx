import React, { useState, useEffect } from "react";
import '../styles/Navbar.css';
import { motion, AnimatePresence } from "framer-motion";

export default function Main() {
  const [activeSection, setActiveSection] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 780);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const top = window.scrollY;

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
    return () => window.removeEventListener("scroll", handleScroll);
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
  };

  const navLinks = [
    { id: "home", label: "Home", from: -100 },
    { id: "about", label: "About", from: 100 },
    { id: "services", label: "Services", from: -100 },
    { id: "projects", label: "Projects", from: 100 },
    { id: "contact", label: "Contact", from: 100 },
  ];

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <i
        id="menu-icon"
        className={`bx ${isMenuActive ? "bx-x" : "bx-menu"}`}
        onClick={handleMenuClick}
      ></i>

      <motion.a
        href="#"
        className="logo"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Portfolio.
      </motion.a>

      <div className="header-div">
        <AnimatePresence mode="wait">
          {(!isMobile || isMenuActive) && (
            <motion.nav
              key={isMobile ? "mobile" : "desktop"}
              className={`navbar ${isMobile && isMenuActive ? "active" : ""}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className={activeSection === link.id ? "active" : ""}
                  initial={{ x: link.from, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1 * (index + 1),
                    type: "spring",
                    stiffness: 80,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      <motion.button
        className="menu-icon"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        Download CV
      </motion.button>
    </header>
  );
}
