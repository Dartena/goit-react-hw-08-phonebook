import { useState } from "react";
import { Form, Button, Input, FormLabel } from "../styles/styled";
import { addContact } from "../../store/contacts/actions";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { getVisibleContacts } from "../../store/contacts/selectors";
import { toast } from "react-toastify";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameId = nanoid();
  const numberId = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const index = contacts.findIndex(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (index !== -1) {
      toast.warn(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }
  };

  function reset() {
    setName("");
    setNumber("");
  }

  return (
    <Form onSubmit={onSubmitHandler}>
      <FormLabel htmlFor={nameId}>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChangeHandler}
          id={nameId}
        />
      </FormLabel>
      <FormLabel htmlFor={numberId}>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onChangeHandler}
          id={numberId}
        />
      </FormLabel>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
}

export default ContactForm;
