import { createContext } from "react";

export const Context = createContext(null);

export const initialStore = () => {
  return {
    message: null,
    contacts: []
  };
};

export const storeReducer = (store, action) => {
  switch (action.type) {
    case 'SET_CONTACTS':
      return { ...store, contacts: action.payload };
    case 'ADD_CONTACT':
      return { ...store, contacts: [...store.contacts, action.payload] };
    case 'DELETE_CONTACT':
      return { ...store, contacts: store.contacts.filter(c => c.id !== action.payload) };
    default:
      throw new Error("Unknown action.");
  }
};
