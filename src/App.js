
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={`/images/good and evil.png`} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <input
          type="text" 
          placeholder='Namm'
        />
        <input
          type="text" 
          placeholder='surname'
        />
         <button type="submit">Log in</button>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
