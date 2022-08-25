import { Button, Container } from "@mui/material";
import React from "react";
import {
  FaMapMarkerAlt,
  FaTwitter,
  FaMobileAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { GoMail } from "react-icons/go";

function Footer() {
  return (
    <>
      <Container className="d-flex justify-content-between text-start py-5 ">
        <div>
          <ul className="foooterul">
            <li>
              <FaMapMarkerAlt />
              <span>
                <h5>Location</h5>
                Basavanagudi, Bengaluru, Karnataka 560004
              </span>
            </li>
            <li>
              <GoMail />{" "}
              <span>
                {" "}
                <h5>Email</h5>
                info@testyantra.com
              </span>
            </li>
            <li>
              <FaMobileAlt />{" "}
              <span>
                {" "}
                <h5>Call</h5>+91 80 4120 4235
              </span>
            </li>
          </ul>
        </div>
        <div className="w-50 ">
          <form className="my-3 d-flex flex-column w-100">
            <input
              type="text"
              placeholder="Your Name"
              className="border-1 border-success rounded-pill p-2 px-3 "
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border-1 border-success rounded-pill p-2 px-3 my-4"
            />
            <textarea
              className=" rounded-3 p-2 pb-5 mb-3"
              placeholder="Message"
            />
            <Button variant="contained" color="secondary">
              Send Message
            </Button>
          </form>
        </div>
      </Container>
      <footer className="d-flex align-items-center justify-content-between p-5 text-start bg-dark text-light">
        <div>
          © Copyright Mentor. All Rights Reserved <br />
          <small>Terms and conditions </small>
        </div>
        <div className="d-flex gap-5 ">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </footer>
    </>
  );
}

export default Footer;
