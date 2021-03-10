import styles from './Button.module.css';

const Button = ({ text, onClick }) => (
  <button type="button" className={styles.Button} onClick={onClick}>
    {text}
  </button>
);

export default Button;
