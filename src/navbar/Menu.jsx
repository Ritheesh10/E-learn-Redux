import { h5 } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <Box className="d-flex justify-content-center gap-4  pt-1  w-50 ">
      <h5>
        <NavLink
          className={`fw-bold text-decoration-none text-secondary py-4 text-dark px-2  ${isActive =>
            isActive ? "active" : ``}`}
          to=""
        >
          Home
        </NavLink>
      </h5>
      <h5>
        <NavLink
          className="fw-bold text-decoration-none text-secondary py-4 text-dark px-2  "
          to="/courses"
        >
          Courses
        </NavLink>
      </h5>
      <h5>
        <NavLink
          className="fw-bold text-decoration-none text-secondary py-4 text-dark px-2"
          to="/blog"
        >
          Blog
        </NavLink>
      </h5>
      <h5>
        <NavLink
          className="fw-bold text-decoration-none text-secondary py-4 text-dark px-2 "
          to="/about"
        >
          About
        </NavLink>
      </h5>
    </Box>
  );
}

export default Menu;
