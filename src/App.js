import { Button } from './components/Button/Button';

const App = () => {
  return (
    <div className="App">
      AAA
      <Button
        disabled={true}
        type="secondary"
        fullWidth={true}
        onClick={() => console.log('Button Clicked')}
      >
        Primary
      </Button>
    </div>
  );
}

export default App;
