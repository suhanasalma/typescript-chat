import { createSlice } from "@reduxjs/toolkit";

// Function to get user data from localStorage
const getUserFromLocalStorage = () => {
  const userString = localStorage.getItem("auth");
  if (userString) {
    try {
      const user = JSON.parse(userString);
      return user ;
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
    }
  }
  return { user: undefined };
};

const initialState = getUserFromLocalStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload.user;
      // Save user data to localStorage
      localStorage.setItem("auth", JSON.stringify({ user: action.payload.user }));
    },
    userLoggedOut: (state) => {
      state.user = undefined;
      // Remove user data from localStorage
      localStorage.removeItem("auth");
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
