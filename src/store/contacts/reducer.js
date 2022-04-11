import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  changeFilter,
  getContacts,
  removeContact,
  addContact,
} from "./actions";
import "react-toastify/dist/ReactToastify.css";

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const items = createReducer([], {
  [getContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, { payload }) => {
    if (!payload) return;
    const newState = [...state, payload];
    return newState;
  },
  [removeContact.fulfilled]: (state, { payload }) => {
    if (!payload) return;
    const { id } = payload;
    return state.filter((contact) => contact.id !== id);
  },
});
export default combineReducers({ items, filter });
