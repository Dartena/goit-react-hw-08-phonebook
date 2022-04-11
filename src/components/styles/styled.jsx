import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #aaa;
  margin-bottom: 30px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #ff6b08;
  &.active {
    color: green;
  }
  :not(:last-of-type) {
    margin-right: 30px;
  }
`;

const AppDiv = styled.div`
  padding: 15px;
  text-align: center;
  font-size: 18px;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  /* display: flex; */
  /* flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

const Title = styled.h2`
  margin-bottom: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto 20px;
`;

const Input = styled.input`
  display: block;
  margin-bottom: 10px;
  width: 100%;
  line-height: 1.5;
  border: 1px solid #757575;
  border-radius: 8px;
  padding-left: 10px;
  outline: none;
  :valid {
    border-color: #16ac16;
  }
  :invalid {
    border-color: red;
  }
`;

const Button = styled.button`
  padding: 10px 16px;
  margin: 0 auto;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  max-width: fit-content;

  :hover,
  :focus {
    background-color: #ff6b08;
    color: #fff;
  }
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;

const List = styled.ul``;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  :not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

const Text = styled.p`
  margin: 0;
`;

const TelLink = styled.a`
  text-decoration: none;
  color: inherit;
  :hover,
  :focus {
    color: #ff6b08;
    text-decoration: underline;
  }
`;

export {
  Header,
  AppDiv,
  Title,
  Form,
  Input,
  Button,
  FormLabel,
  List,
  ListItem,
  Text,
  TelLink,
  Link,
};
