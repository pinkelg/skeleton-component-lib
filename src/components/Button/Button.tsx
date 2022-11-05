import React, { ReactElement } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
  label: string;
}

console.log("styles.Button", styles);

const Button = (props: ButtonProps): ReactElement<HTMLButtonElement> => {
  return <button className={styles.Button}>{props.label}</button>;
};

export default Button;
