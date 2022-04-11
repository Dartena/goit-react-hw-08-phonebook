import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { Button, Form, FormLabel, Input } from "../styles/styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authActions } from "../../store/auth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailId = nanoid();
  const passwordId = nanoid();
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    switch (name) {
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
      return toast(`Password should have at least 3 symbols`);
    }
    dispatch(authActions.login({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1>Login Page</h1>
      <Form onSubmit={onSubmitHandler}>
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
          <Input
            type="password"
            name="password"
            required
            value={password}
            onChange={onChangeHandler}
            id={passwordId}
          />
        </FormLabel>
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
}
