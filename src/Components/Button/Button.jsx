import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ text, onClick }) => (
  <button type="button" className={styles.Button} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
