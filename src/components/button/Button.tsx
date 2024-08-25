
import classes from './Button.module.css'

type Props = {
  children: string;
  onClick: () => void
}

const Button = ({children, onClick}: Props) => {
  return (
    <button className={classes.button} onClick={onClick}>{children}</button>
  )
}

export default Button