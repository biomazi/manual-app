
import Link from 'next/link';
import classes from './Button.module.css'

type Props = {
  children: string;
  onClick: () => void
}

const Button = ({children, onClick}: Props) => {
  return (
    <Link className={classes.button} href="/?modal=true">{children}</Link>
    // <button className={classes.button} onClick={onClick}>{children}</button>
  )
}

export default Button