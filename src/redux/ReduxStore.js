import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../authentication/Firebase";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux/es/exports";
import userSlice, { setUser } from "../Feature/userSlice";
import crudSlice from "../Feature/crudSlice";

const initialState = { isOpen: false };

export const signupStudent = createAsyncThunk(
  "modal/signupStudent",
  async ({ email, password }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
);

export const loginStudent = createAsyncThunk(
  "modal/loginStudent",
  async ({ email, password }) => {
    try {
      let data = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logined successfully");
      return data.user.email;
    } catch (error) {
      toast.error(error.message);
      // return new Error(error);
    }
  }
);

export const ModalReducer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    OpenModal: (state, action) => {
      state.isOpen = true;
    },
    CloseModel: (state, action) => {
      state.isOpen = false;
    },
  },
  extraReducers: {
    [signupStudent.fulfilled]: () => {},

    [loginStudent.fulfilled]: () => {},
  },
});

export const { OpenModal, CloseModel } = ModalReducer.actions;

export const store = configureStore({
  reducer: {
    modal: ModalReducer.reducer,
    user: userSlice,
    subs: crudSlice
  },
});
