import React from "react";
import { Box, Button, Card, Container, Grid, Pagination } from "@mui/material";

function Courses() {
  return (
    <section>
      <div className="text-center p-5 bg-primary text-light">
        <h2>Courses</h2>
        <p>
          Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia
          id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam
          aperiam consequatur laboriosam nemo harum praesentium.
        </p>
      </div>
      <Box className="d-flex flex-column gap-3">
        <Pagination className="m-auto my-5" count={10} color="primary" />
        <Grid container className="d-flex ">
          {Array.from(Array(50)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card className="w-75 my-5 m-auto">
                <img
                  src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/course-1.jpg"
                  alt=""
                  className="w-100 mb-2"
                />
                <div className="fw-bold px-3 d-flex justify-content-between align-items-center">
                  Web Technology
                  <Button variant="outlined" color="success">
                    Enroll
                  </Button>
                </div>
                <div className="p-3 text-justify">
                  Et architecto provident deleniti facere repellat nobis iste.
                  Id facere quia quae dolores dolorem tempore.
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
}

export default Courses;
