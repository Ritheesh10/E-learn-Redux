import { Box } from "@mui/material";
import React from "react";
import { NavLink,useLocation } from "react-router-dom";

function SideBar() {

  const { pathname } = useLocation()
  console.log(pathname);
  return (
    <Box height={"87vh"} className=" py-5 d-flex flex-column gap-5 ">
      <NavLink
        className={` sidebarActive ${
          pathname === "/signup/admin-block" && "activeLink"
        }`}
        to="admin-block"
      >
        SignIn as Admin
      </NavLink>
      <NavLink
        className={` sidebarActive ${
          pathname === "/signup/trainer-block" && "activeLink"
        }`}
        to="trainer-block"
      >
        SignIn as Trainer
      </NavLink>
      <NavLink
        className={` sidebarActive ${
          pathname === "/signup/student-block" && "activeLink"
        }`}
        to="student-block"
      >
        SignIn as Student
      </NavLink>
    </Box>
  );
}

export default SideBar;
