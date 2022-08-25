import { Box, Card, Container } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSub, deleteSub, updateSub } from "../Feature/crudSlice";

function CrudPage() {
  const dispatch = useDispatch();
  let UserEmail = useSelector(state => state.user.email);
  const subject = useSelector(state => state.subs.subject);
  const [subname, setSubname] = useState("");

  const handleCrud = e => {
    e.preventDefault();
    dispatch(addSub({ id: subject[subject.length - 1].id + 1, subname }));
    setSubname("");
  };

  return (
    <section className="d-flex flex-column align-items-center gap-3">
      <div className="m-5">
        <h1>Welcome {UserEmail.split("@")[0]}</h1>
        <h2>Start your lessons</h2>
      </div>
      <Box className="mx-5 d-flex " component="form">
        <input
          type="text"
          placeholder="Enter Subject"
          value={subname}
          onChange={e => setSubname(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleCrud}>
          Add
        </button>
      </Box>

      <Box className="d-flex flex-column gap-2 w-100">
        {subject.map(sub => {
          return (
            <Card
              key={sub.id}
              className="p-2 d-flex align-items-center justify-content-between w-50 m-auto bg-light"
            >
              <h5>{sub.subname}</h5>
              <span className="d-flex gap-2">
                <button
                  className="btn btn-success p-1"
                  onClick={e => {
                    e.preventDefault();
                    dispatch(updateSub({ id: sub.id, subname }));
                  }}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger p-1"
                  onClick={e => {
                    e.preventDefault();
                    dispatch(deleteSub({ id: sub.id }));
                  }}
                >
                  Delete
                </button>
              </span>
            </Card>
          );
        })}
      </Box>
    </section>
  );
}

export default CrudPage;
