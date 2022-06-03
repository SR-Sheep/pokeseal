import logo from './assets/logo.svg';
import Button from './components/Button';
import './containers/App.css';
import PokeImg from './components/PokeImg';
import PokePicker from './components/PokePicker';

function App() {
  return (
    <div className="App">
      <PokePicker></PokePicker>
    </div>
  );
}

export default App;
