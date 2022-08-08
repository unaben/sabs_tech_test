import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const contactURL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  contacts: [],
  pending: null,
  error: null,
};

export const getContacts = createAsyncThunk("contacts/getContact", async () => {
  const responce = await fetch(contactURL);
  const resData = await responce.json();
  return resData;
});

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      return (state = {
        ...state,
        contacts: state.contacts.filter((contact) => {          
          return contact.id !== action.payload.id;
        }),
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        return (state = {
          ...state,
          pending: false,
          error: false,
        });
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        return (state = {
          ...state,
          contacts: action.payload,
          pending: false,
        });
      })
      .addCase(getContacts.rejected, (state, action) => {
        return (state = {
          ...state,
          pending: false,
          error: true,
        });
      });
  },
});

export const { deleteContact } = contactSlice.actions;
export const allContacts = (state) => state.contacts.contacts;
export default contactSlice.reducer;
