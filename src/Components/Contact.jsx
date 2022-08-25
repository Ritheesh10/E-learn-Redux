import { Button, FormGroup, Grid, Input } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Form } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { GoMail } from "react-icons/go";
import Footer from "./Footer";

function Contact() {
  return (
    <section className="bg-light text-center">
      <div className="py-5">
        <h1>Need Help? Contact Us</h1>
      </div>
      <iframe
        src={
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15553.516654193052!2d77.5686993!3d12.9475724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc5f7f682a2d4ebdf!2sTest%20Yantra%20Software%20Solutions%20India%20Pvt%20Ltd!5e0!3m2!1sen!2ssg!4v1656062051558!5m2!1sen!2ssg"
        }
        width="100%"
        height="350"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
     <Footer/>
    </section>
  );
}

export default Contact;
