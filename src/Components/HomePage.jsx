import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Typography,
} from "@mui/material";
import React from "react";
import IMG from "../styles/learning.jpg";
import IMG1 from "../styles/library.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiPhp } from "react-icons/si";
import Contact from "./Contact";
import { useDispatch,useSelector } from "react-redux";
import { OpenModal } from "../redux/ReduxStore";
import CrudPage from "../crud/CrudPage";

function HomePage() {
  const dispatch = useDispatch()
  let UserEmail = useSelector(state => state.user.email);

  if (UserEmail === '') {
    return (
      <section className="bgpicture">
        <div className="bg-light d-flex justify-content-between align-items-center px-5">
          <div className="">
            <h1>Learning Today,</h1>
            <h1>Leading Tomorrow</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tenetur laboriosam architecto atque porro, minima corporis. Aut,
              magnam? Maiores excepturi voluptatibus dignissimos vel dolor
              perferendis libero exercitationem voluptate animi architecto.
            </p>
            <Button onClick={() => dispatch(OpenModal())}
              variant="outlined"
              color="success"
              className="rounded-pill fw-bold border-2 border-success "
            >
              Get Started
            </Button>
          </div>
          <img src={IMG} alt="" className="w-50 p-5 " />
        </div>
        <div className="bgmiddle">
          <span>
            <h1>1232</h1>Students
          </span>
          <span>
            <h1>64</h1>Courses
          </span>
          <span>
            <h1>42</h1>Videos
          </span>
          <span>
            <h1>15</h1>Trainers
          </span>
        </div>
        <div className="bg-light  py-5">
          <Container>
            <Table sx={{ display: "flex", paddingY: "3rem" }}>
              <TableBody className="tbd">
                <TableHead>
                  <TableCell
                    sx={{
                      boxShadow: "0px 0px 5px 3px lightblue ",
                      padding: "2rem",
                      cursor: "pointer",
                    }}
                  >
                    <FaHtml5 className="text-danger" /> <strong>HTML</strong>
                  </TableCell>
                  <TableCell
                    sx={{
                      boxShadow: "0px 0px 5px 3px lightblue ",
                      padding: "2rem",
                      cursor: "pointer",
                    }}
                  >
                    <FaCss3Alt className="text-info" /> <strong>CSS</strong>
                  </TableCell>
                  <TableCell
                    sx={{
                      boxShadow: "0px 0px 5px 3px lightblue ",
                      padding: "2rem",
                      cursor: "pointer",
                    }}
                  >
                    <FaJsSquare className="text-warning" />{" "}
                    <strong>JavaScript</strong>
                  </TableCell>
                  <TableCell
                    sx={{
                      boxShadow: "0px 0px 5px 3px lightblue ",
                      padding: "2rem",
                      cursor: "pointer",
                    }}
                  >
                    <SiPhp className="text-primary" /> <strong>PHP</strong>
                  </TableCell>
                </TableHead>
                <TableHead>
                  <TableCell
                    sx={{
                      boxShadow: "0px 0px 5px 3px lightblue ",
                      padding: "2rem",
                      cursor: "pointer",
                    }}
                  >
                    <SiMongodb className="text-success" />{" "}
                    <strong>Mongo DB</strong>
                  </TableCell>
                  <TableCell
                    sx={{
                      boxShadow: "0px 0px 5px 3px lightblue ",
                      padding: "2rem",
                      cursor: "pointer",
                    }}
                  >
                    <SiExpress className="text-secondary" />{" "}
                    <strong>Express JS</strong>
                  </TableCell>
                  <TableCell
                    sx={{
                      boxShadow: "0px 0px 5px 3px lightblue ",
                      padding: "2rem",
                      cursor: "pointer",
                    }}
                  >
                    <FaReact className="text-primary" /> <strong>React JS</strong>
                  </TableCell>
                  <TableCell
                    sx={{
                      boxShadow: "0px 0px 5px 3px lightblue ",
                      padding: "2rem",
                      cursor: "pointer",
                    }}
                  >
                    <FaNodeJs className="text-success" /> <strong>Node JS</strong>
                  </TableCell>
                </TableHead>
              </TableBody>
            </Table>
          </Container>
        </div>
        <Contact />
      </section>
    );
  } else {
   return <CrudPage/>
  }
}

export default HomePage;
