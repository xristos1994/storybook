import { coreComponentsStory } from './../../__stories__/coreComponents';
import { Button } from './../Button';

coreComponentsStory.add(
  'Button Primary', () => {
    return (
      <Button
        disabled={false}
        type="primary"
        fullWidth={true}
        onClick={() => console.log('Button Clicked')}
      >
        Primary1
      </Button>
    );
  }
)