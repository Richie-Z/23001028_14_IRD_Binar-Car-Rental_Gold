import React from "react"
import "./styles.scss"

type ButtonProps = {
  title: string,
  isSecondary: boolean
}

const Button: React.FC<ButtonProps> = ({ title, isSecondary = false }) => {
  return (
    <button className={`btn ${isSecondary && 'btn-secondary'}`}>{title}</button>
  );
};

export default Button;
