import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contactSlice";

export default configureStore({
  reducer: {
    contacts: contactReducer,  
  },
});