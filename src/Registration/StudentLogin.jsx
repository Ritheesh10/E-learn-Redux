import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../authentication/Firebase";
import { signupStudent } from "../redux/ReduxStore";

function StudentLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const handlSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("password not matching");
      toast.error("Password not matching");
    } else {
      await dispatch(signupStudent({ email, password }));
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      toast.success("SignUp successfully");
      navigate("/");
    }
  };

  return (
    <section className="">
      <Grid container component="main" sx={{ width: "80vw" }}>
        <CssBaseline />
        <img
          src="https://cdn.pixabay.com/photo/2022/06/22/06/53/cabinet-7277181_960_720.jpg"
          alt=""
          width={"55%"}
        />
        <Grid item xs={12} sm={8} md={5} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Student Sign in
            </Typography>
            <form
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={handlSubmit}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="warning"
              >
                Sign In
              </Button>

              {/* <Copyright sx={{ mt: 5 }} /> */}
            </form>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}

export default StudentLogin;
