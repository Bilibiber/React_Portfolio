import React from "react";
import { NavContainer } from "./styles/styledNav";
export default function Nav({ children, ...restProps }) {
  return <NavContainer {...restProps}>{children}</NavContainer>;
}
