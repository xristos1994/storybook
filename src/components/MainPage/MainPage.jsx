import { useState } from 'react';
import { Button } from '../Button/Button';
import { Counter } from '../Counter/Counter';
import styles from './styles.module.css';

export const MainPage = () => {
  const [ isCounterEnabled, setIsCounterEnabled ] = useState(true);
  return (
    <div className={styles.mainPage}>
      <div className={styles.counterContainer}>
        <Button
          type="secondary"
          onClick={() => setIsCounterEnabled(isCounterEnabled => !isCounterEnabled)}
        >
          { isCounterEnabled ? 'Disable Counter' : 'Enable Counter'}
        </Button>

        <Counter
          initialValue={10}
          minValue={0}
          maxValue={20}
          disabled={!isCounterEnabled}
        />
      </div>
    </div>
  );
}

export default MainPage;
