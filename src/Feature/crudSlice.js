import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subject: [
    {
      id: 0,
      subname: "Maths",
    },
  ],
};

const crudSlice = createSlice({
  name: "subs",
  initialState,
  reducers: {
    addSub: (state, action) => {
      state.subject.push(action.payload);
    },
    deleteSub: (state, action) => {
      state.subject = state.subject.filter(sub => sub.id !== action.payload.id);
    },
    updateSub: (state, action) => {
      state.subject.map(sub => {
          if (sub.id == action.payload.id) {
            sub.subname=action.payload.subname
        }
      });
    },
  },
});

export const { addSub, deleteSub, updateSub } = crudSlice.actions;
export default crudSlice.reducer;
