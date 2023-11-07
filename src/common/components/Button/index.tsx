import React from "react"
import "./styles.scss"
import { Link } from "react-router-dom"

type ButtonProps = {
  title: string,
  isSecondary?: boolean,
  to?: string
}

const Button: React.FC<ButtonProps> = ({ title, isSecondary = false, to }) => {
  return (
    <Link className={`btn ${isSecondary && 'btn-secondary'}`} to={to ?? ""}>{title}</Link>
  );
};

export default Button;
