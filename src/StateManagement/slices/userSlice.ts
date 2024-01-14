import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserToCreateGroup: (state, action) => {
      
    },
  },
});

export const { addUserToCreateGroup } = userSlice.actions;
export default userSlice.reducer;
