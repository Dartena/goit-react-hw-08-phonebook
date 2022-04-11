import React from "react";
import { Link } from "../styles/styled";

export default function AuthNav() {
  return (
    <>
      <Link end to="/register">
        Signup
      </Link>
      <Link end to="/login">
        Login
      </Link>
    </>
  );
}
