import {  Box, Container } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import {AiOutlineRight} from 'react-icons/ai'
import Footer from "./Footer";

function About() {
  return (
    <section>
      <Container className="d-flex align-items-center justify-content-between py-5">
        <h1 className="fs-1">
          We share knowledge <br /> with the world
        </h1>
        <div className="d-flex">
          <img
            src="https://s.udemycdn.com/teaching/support-1-v3.jpg"
            alt=""
            width="50%"
          />
          <img
            src="https://s.udemycdn.com/teaching/support-2-v3.jpg"
            alt=""
            width="50%"
          />
        </div>
      </Container>
      <Container className="text-center p-5 ">
        We help organizations of all types and sizes prepare for the path ahead
        — wherever it leads. Our curated collection of business and technical
        courses help companies, governments, and nonprofits go further by
        placing learning at the center of their strategies.
        <Button className="bg-dark border-0 my-3 ">Learn more</Button>
        <div className="d-flex align-items-center justify-content-evenly text-start gap-5 my-5 text-light py-5">
          <Box className="bg-danger p-4 ">
            <h2>Work with us</h2>
            At Udemy, we’re all learners and instructors. We live out our values
            every day to create a culture that is diverse, inclusive, and
            committed to helping employees thrive.
            <div className="pt-5">
              Join our team <AiOutlineRight />
            </div>
          </Box>
          <Box className="bg-warning p-4 text-dark">
            <h2>See our research</h2>
            We’re committed to changing the future of learning for the better.
            Dig into our original research to learn about the forces that are
            shaping the modern workplace.
            <div className="pt-5">
              Learn more <AiOutlineRight />
            </div>
          </Box>
          <Box className="bg-success p-4">
            <h2>Read our blog</h2>
            Want to know what we’ve been up to lately? Check out the Udemy blog
            to get the scoop on the latest news, ideas and projects, and more.
            <div className="pt-5">
              Read now <AiOutlineRight />
            </div>
          </Box>
        </div>
      </Container>
      <div className="py-5 text-center">
        <h1>Need Help? Contact Us</h1>
      </div>
      <Footer />
    </section>
  );
}

export default About;
