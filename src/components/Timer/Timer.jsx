import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { classnames } from './../../utils/classnames/classnames';
import { Button } from '../Button/Button';
import styles from './styles.module.css';

let timerInterval;

export const Timer = ({
  className,
  initialIsRunning
}) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setIsRunning(initialIsRunning);

    return () => {
      clearInterval(timerInterval);
    };
  }, [initialIsRunning]);

  useEffect(() => {
    if(isRunning) {
      timerInterval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  }
;
  const reset = () => {
    stop();
    setSeconds(0);
  };

  const days = parseInt(seconds / ( 24 * 60 * 60 ));
  const hours = parseInt(seconds / (60 * 60));
  const minutes = parseInt(seconds / 60);
  const secs = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

  const daysString = days ? days + 'd ' : '';
  const hoursString = ('0' + hours).slice(-2) + 'h ';
  const minutesString = ('0' + minutes).slice(-2) + 'm ';
  const secsString = ('0' + secs).slice(-2) + 's ';

  const timerString = daysString + hoursString + minutesString + secsString;


  return (
   <div
      className={classnames(styles.timer, {
        [className]: className
      })}
    >
      <h3>
        {timerString}
      </h3>

      <div className={styles.actions}>
      <Button
        type="primary"
        onClick={start}
      >
        Start
      </Button>

      <Button
        type="primary"
        onClick={stop}
      >
        Stop
      </Button>

      <Button
        type="primary"
        onClick={reset}
      >
        Reset
      </Button>
      </div>
   </div>
  );
};

Timer.propTypes = {
  className: PropTypes.string,
  isRunning: PropTypes.bool

};

Timer.defaultProps = {
  className: '',
  isRunning: false
};