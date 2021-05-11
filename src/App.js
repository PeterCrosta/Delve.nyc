import './App.css';
import {CityMap} from './components/CityMap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a 
          href="https://github.com/PeterCrosta/Delve.nyc" 
          target='_blank' 
          rel='noopener noreferrer'
        >
          <img 
            src='https://www.sferalabs.cc/wp-content/uploads/github-logo-white.png' 
            alt='github logo' 
            className="githubIcon"
            />
        </a>
        <CityMap />
      </header>
    </div>
  );
}

export default App;
