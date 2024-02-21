import './App.css';
import pigeon from './P-logo.png';
import photo from './ship.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pigeon} className="App-logo" alt="logo" /><h1>igeon</h1>
      </header>
        <img src={photo} className='photo'/>
    </div>
  );
}

export default App;
