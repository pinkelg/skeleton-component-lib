import React, { ReactElement } from "react";
import Button, { ButtonProps } from "./Button";

const SuccessButton = (props: ButtonProps): ReactElement<HTMLButtonElement> => {
  return <Button {...props} label={"success"} />;
};

export default SuccessButton;
