import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { authActions } from "../../store/auth";
import { Button, Form, FormLabel, Input } from "../styles/styled";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)) {
      return toast(`Please enter valid email`);
    }
    if (password.length < 3) {
      return toast(`Password shpuld have at least 3 symbols`);
    }
    dispatch(authActions.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1>Registration</h1>
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
        <FormLabel htmlFor={emailId}>
          Email
          <Input
            type="text"
            name="email"
            title="Please enter valid email"
            required
            value={email}
            onChange={onChangeHandler}
            id={emailId}
          />
        </FormLabel>
        <FormLabel htmlFor={passwordId}>
          Password
          <Input
            type="password"
            name="password"
            required
            value={password}
            onChange={onChangeHandler}
            id={passwordId}
          />
        </FormLabel>
        <Button type="submit">Signup</Button>
      </Form>
    </>
  );
}
