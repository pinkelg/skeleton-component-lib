import React from "react";
import Button ,{ButtonProps} from './Button'

const SuccessButton = (props: ButtonProps) => {
    return <Button {...props} label={"success"}/>
};

export default SuccessButton;