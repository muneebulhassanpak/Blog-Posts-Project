import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { userId: "1", name: "Muneeb" },
  { userId: "2", name: "Abdul" },
  { userId: "3", name: "Asim" },
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
