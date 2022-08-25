import React from "react";
import { Container } from "@mui/material";
import { Nav } from "react-bootstrap";
import AuthBlock from "./AuthBlock";
import Logo from "./Logo";
import Menu from "./Menu";

function Navbar() {
  return (
    <section className={`w-100 navbarb `} >
      <Nav className=" justify-content-between align-items-center py-2 px-5">
        <Logo />
        <Menu />
        <AuthBlock />
      </Nav>
    </section>
  );
}

export default Navbar;
