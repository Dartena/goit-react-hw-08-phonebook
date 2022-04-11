import PropTypes from "prop-types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeContact } from "../../store/contacts/actions";
import { Button, List, ListItem, TelLink, Text } from "../styles/styled";

function ContactList({ contacts }) {
  const dispatch = useDispatch();

  const onDelete = useCallback((id) => dispatch(removeContact(id)), [dispatch]);

  return (
    <List>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          <Text>
            {contact.name}:{" "}
            <TelLink href={"tel:" + contact.number}>{contact.number}</TelLink>
          </Text>
          <Button
            type="button"
            onClick={() => {
              onDelete(contact.id);
            }}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
