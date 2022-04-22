import { useState } from 'react';
import PropTypes from 'prop-types';
import { isNumber } from '../../utils/isNumber/isNumber';
import { classnames } from './../../utils/classnames/classnames';
import { Button } from '../Button/Button';
import styles from './styles.module.css';

export const Counter = ({
  initialValue,
  minValue,
  maxValue,
  step,
  disabled,
  className
}) => {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue);
  }
  return (
   <div
      className={classnames(styles.counter, {
        [className]: className
      })}
    >
      <Button
        type="primary"
        onClick={() => setValue( value => value - step >= minValue ? value - step : value)}
        disabled={disabled}
      >
        -
      </Button>

      <h3>
        {value}
      </h3>

      <Button
        type="primary"
        onClick={() => setValue( value => value + step <= maxValue ? value + step : value)}
        disabled={disabled}
      >
        +
      </Button>

      <br />

      <Button
        type="primary"
        onClick={reset}
        disabled={disabled}
      >
        Reset
      </Button>
   </div>
  );
};

Counter.propTypes = {
  initialValue: function(props, propName, componentName) {
    if(!isNumber(props[propName])) {
      return new Error(
        `Invalid prop ${propName} (${props[propName]}) supplied to
        ${componentName}. Validation failed. It should be a number.`
      );
    } else if (isNumber(props.minValue) && props[propName] < props.minValue ) {
      return new Error(
        `Invalid prop ${propName} (${props[propName]}) supplied to
        ${componentName}. Validation failed. It should be a number greater or equal to minValue (${props.minValue}).`
      );
    } else if (isNumber(props.maxValue) && props[propName] > props.maxValue ) {
      return new Error(
        `Invalid prop ${propName} (${props[propName]}) supplied to
        ${componentName}. Validation failed. It should be a number less or equal to maxValue (${props.maxValue}).`
      );
    }
  },
  minValue: function(props, propName, componentName) {
    if(!isNumber(props[propName])) {
      return new Error(
        `Invalid prop ${propName} (${props[propName]}) supplied to
        ${componentName}. Validation failed. It should be a number.`
      );
    } else if (isNumber(props.maxValue) && props.maxValue <= props[propName]) {
      return new Error(
        `Invalid prop ${propName} (${props[propName]}) supplied to
        ${componentName}. Validation failed. It should be a number less than maxValue (${props.maxValue}).`
      );
    }
  },
  maxValue: function(props, propName, componentName) {
    if(!isNumber(props[propName])) {
      return new Error(
        `Invalid prop ${propName} (${props[propName]}) supplied to
        ${componentName}. Validation failed. It should be a number.`
      );
    } else if (isNumber(props.minValue) && props.minValue >= props[propName]) {
      return new Error(
        `Invalid prop ${propName} (${props[propName]}) supplied to
        ${componentName}. Validation failed. It should be a number greater than minValue (${props.minValue}).`
      );
    }
  },
  step: function(props, propName, componentName) {
    if(!isNumber(props[propName])) {
      return new Error(
        `Invalid prop ${propName} (${props[propName]}) supplied to
        ${componentName}. Validation failed. It should be a number.`
      );
    } else if (props[propName] === 0) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed. It should be a number greater than 0.'
      );
    }
  },
  disabled: PropTypes.bool,
  className: PropTypes.string
};

Counter.defaultProps = {
  initialValue: 0,
  minValue: 0,
  maxValue: Infinity,
  step: 1,
  disabled: false,
  className: '',
};