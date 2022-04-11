import React from "react";
import { useSelector } from "react-redux";
import { Header, Link } from "../styles/styled";
import { getIsLoggedIn } from "../../store/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Header id="header">
      <Link end to="/about">
        Phonebook
      </Link>
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </Header>
  );
}
