import { ButtonHTMLAttributes, ReactNode } from "react";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const Button = (props: BtnProps) => {
  const { children, startIcon, endIcon, className, onClick } = props;
  const startIconComponent = startIcon && (
    <span className="start">{startIcon}</span>
  );

  const endIconComponent = endIcon && <span className="end">{endIcon}</span>;

  return (
    <button className={`custom_btn ${className}`} onClick={onClick}>
      {startIconComponent} {children} {endIconComponent}
    </button>
  );
};
