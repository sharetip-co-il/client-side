import React from "react";
import { NavbarContainer, NavItem } from "./backgroundPage/BackgroundWrapper";
const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <NavbarContainer>
      <NavItem onClick={() => scrollToSection("home")}>בית</NavItem>
      <NavItem onClick={() => scrollToSection("contact")}>צור קשר</NavItem>
    </NavbarContainer>
  );
};

export default Navbar;
