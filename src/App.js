import './App.css';
import pigeon from './P-logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pigeon} className="App-logo" alt="logo" />
        <p>
          Pigeon Drone Delivery
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
