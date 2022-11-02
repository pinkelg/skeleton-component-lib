import React, { ReactElement } from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps): ReactElement<HTMLButtonElement> => {
  return <button>{props.label}</button>;
};

export default Button;
