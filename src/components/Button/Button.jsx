import PropTypes from 'prop-types';
import { classnames } from './../../utils/classnames/classnames';
import styles from './styles.module.css';

export const Button = ({
  type,
  fullWidth,
  className,
  disabled,
  onClick,
  children
}) => {
  return (
    <button
      disabled={disabled}
      className={classnames(styles.button, {
        [styles.primary]: type === 'primary',
        [styles.secondary]: type === 'secondary',
        [styles.fullWidth]: fullWidth,
        [className]: className
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

Button.defaultProps = {
  type: 'primary',
  fullWidth: false,
  className:'',
  disabled: false
};