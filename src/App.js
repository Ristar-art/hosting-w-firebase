
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
          placeholder='name'
        />
        
        <input
          type="text" 
          placeholder='surname'
        />
        <input
          type="text" 
          placeholder='email'
        />
        <input
          type="password" 
          placeholder='password'
        />
         <button type="submit">submit</button>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
