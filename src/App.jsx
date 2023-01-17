import React from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchContacts } from "./redux/operations";
import { deleteContact } from "./redux/operations";
import Filter from "./components/Filter";
import "./App.css";

const App = (props) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteContact(id));
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList onClick={handleDelete} />
    </div>
  );
};

export default App;
