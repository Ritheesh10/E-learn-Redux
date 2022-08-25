import React from "react";
import { createPortal } from "react-dom";

function Modal(props) {
  return (createPortal(<>{props.children}</>, document.getElementById("modal")));
}

export default Modal;
