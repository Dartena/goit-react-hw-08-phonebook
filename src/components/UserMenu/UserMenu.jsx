import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Link } from "../styles/styled";
import { getUsername } from "../../store/auth/selectors";
import { authActions } from "../../store/auth";
import styled from "styled-components";

const UserMenuDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-left: 30px;
`;

const UserName = styled.p`
  margin: 0 30px;
`;

export default function UserMenu() {
  const username = useSelector(getUsername);
  const dispatch = useDispatch();
  return (
    <UserMenuDiv>
      <Link end to="/contacts">
        Contacts
      </Link>
      <UserName>{username}</UserName>
      <Button type="button" onClick={() => dispatch(authActions.logOut())}>
        Logout
      </Button>
    </UserMenuDiv>
  );
}
