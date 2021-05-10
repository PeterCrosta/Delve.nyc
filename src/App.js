import logo from './logo.svg';
import './App.css';
import {CityMap} from './components/CityMap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CityMap />
        </a>
      </header>
    </div>
  );
}

export default App;
