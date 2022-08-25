import { Button } from "@mui/material";
import React from "react";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import UserMenu from "../Components/UserMenu/UserMenu";
import Modal from "../modal/Modal";
import { OpenModal } from "../redux/ReduxStore";
import LoginModal from "../Registration/LoginModal";

function AuthBlock() {
  const dispatch = useDispatch();
  let UserEmail = useSelector(state => state.user.email);

  const Opening = useSelector(state => state.modal.isOpen);
  return (
    <div className="w-25 d-flex justify-content-start gap-4">
      {UserEmail === "" ? (
        <Button
          variant="contained"
          color="primary"
          sx={{ display: "flex", gap: 1 }}
          onClick={() => dispatch(OpenModal())}
        >
          {" "}
          <FaUserAlt />
          Log In
        </Button>
      ) : (
        <UserMenu />
      )}

      <Modal>
        <LoginModal />
      </Modal>

      <Button
        variant="outlined"
        className="rounded-pill"
        color="warning"
        disableTouchRipple
        sx={{ display: "flex", gap: 1 }}
      >
        <FaPhoneAlt /> +51 6785253148
      </Button>
    </div>
  );
}

export default AuthBlock;
