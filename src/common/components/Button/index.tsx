import { FC, MouseEventHandler } from "react"
import "./styles.scss"

type ButtonProps = {
  title: string,
  isSecondary?: boolean,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({ title, isSecondary = false, onClick = () => console.log('sup!') }) => {
  return (
    <button className={`btn ${isSecondary && 'btn-secondary'}`} onClick={onClick}>{title}</button>
  );
};

export default Button;
