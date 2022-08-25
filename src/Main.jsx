import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./navbar/Navbar";
import { store } from "./redux/ReduxStore";
import CustomRoutes from "./Routes/CustomRoutes";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <CustomRoutes />
      </BrowserRouter>
    </Provider>
  );
};

export default Main;
