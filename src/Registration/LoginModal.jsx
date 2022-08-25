import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CloseModel, loginStudent, OpenModal } from "../redux/ReduxStore";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { toast } from "react-toastify";
import { setUser } from "../Feature/userSlice";

function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isOpen = useSelector(state => state.modal.isOpen);
  const dispatch = useDispatch();

  const handleLogin = async e => {
    e.preventDefault();
  
    let userEmail = await dispatch(loginStudent({ email, password })); 
    if (!userEmail.payload) {
      return;
    }
    dispatch(setUser(userEmail.payload));
    dispatch(CloseModel())
    setEmail('')
    setPassword('')
  };

  if (isOpen === false) return null;
  return (
    <section
      className="position-fixed top-0 d-flex justify-content-center align-items-center h-100 w-100 bg-opacity-50 bg-secondary"
      onClick={() => dispatch(CloseModel())}
    >
      <Box
        className="bg-light py-5 mt-4 rounded-3 d-flex flex-column align-items-center overflow-hidden"
        sx={{
          zIndex: 20,
          width: "30vw",
        }}
        onClick={e => e.stopPropagation()}
      >
        <Avatar sx={{ bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form noValidate className="px-5 " onSubmit={handleLogin}>
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

          <Button type="submit" fullWidth variant="contained" className="my-2">
            Login
          </Button>
        </form>
        <div className="mt-4 d-flex flex-column gap-3">
          <Link className="text-dark text-decoration-none">
            New User? Register Now
          </Link>
          <NavLink
            onClick={() => dispatch(CloseModel())}
            className={`${isActive => (isActive ? "" : "")} btn btn-success`}
            to="signup/admin-block"
          >
            Sign Up
          </NavLink>
        </div>
      </Box>
    </section>
  );
}

export default LoginModal;
