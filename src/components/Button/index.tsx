import React from "react";
import { ButtonHTMLAttributes } from "react";

import { Container } from "./style";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: IButtonProps) => {
  return <Container {...rest}>{children}</Container>;
};

export default Button;
