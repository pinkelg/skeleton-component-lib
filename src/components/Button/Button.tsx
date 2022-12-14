import React, { FC, ReactNode } from "react";
import cx from "classnames";

export interface IButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
}

export const Button: FC<IButtonProps> = ({ onClick, disabled, className, children }) => (
  <button type="button" className={cx("button", className)} onClick={onClick} disabled={disabled} data-testid="Button-Button">
    {children}
  </button>
);
