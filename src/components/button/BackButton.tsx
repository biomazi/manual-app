
import clsx from 'clsx';
import classes from './Button.module.css'

type Props = {
  children: string;
  onClick: () => void
}

const BackButton = ({children, onClick}: Props) => {
  return (
    <button className={clsx(classes.button, classes.backButton)} onClick={onClick}>{children}</button>
  )
}

export default BackButton