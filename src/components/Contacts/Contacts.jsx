import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { getVisibleContacts } from "../../store/contacts/selectors";
import { getContacts } from "../../store/contacts/actions";

export default function Contacts() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getContacts()), [dispatch]);
  return (
    <>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length ? (
        <ContactList contacts={contacts} />
      ) : (
        <p>Nothing found</p>
      )}
    </>
  );
}
