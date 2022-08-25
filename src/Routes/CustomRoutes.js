import React from "react";
import { useRoutes } from "react-router-dom";
import About from "../Components/About";
import Blog from "../Components/Blog";
import Courses from "../Components/Courses";
import HomePage from "../Components/HomePage";
import AdminLogin from "../Registration/AdminLogin";
import MultiRegister from "../Registration/MultiRegister";
import StudentLogin from "../Registration/StudentLogin";
import TrainerLogin from "../Registration/TrainerLogin";

function CustomRoutes() {
  const myRoutes = useRoutes([
    {
      path: "",
      element: <HomePage />,
    },
    {
      path: "/courses",
      element: <Courses />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/signup",
      element: <MultiRegister />,
      children: [
        {
          path: "/signup/admin-block",
          element: <AdminLogin />,
        },
        {
          path: "/signup/trainer-block",
          element: <TrainerLogin />,
        },
        {
          path: "/signup/student-block",
          element: <StudentLogin />,
        },
      ],
    },
  ]);
  return myRoutes;
}

export default CustomRoutes;
