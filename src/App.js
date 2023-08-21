
import './App.css';

function App() {
  return (
    <div className="App">masters
      <header className="App-header">
        <img src={`/images/good and evil.png`} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <br></br>
          <input
          type="text" 
          placeholder='name'
        />
        <br></br>
        <input
          type="text" 
          placeholder='surname'
        />
        <br></br>
        <input
          type="text" 
          placeholder='email'
        />
        <br></br>
        <input
          type="password" 
          placeholder='password'
        />
        <br></br>
         <input
          type="text" 
          placeholder='phone Number'
        />
        <br></br>
         <button type="submit">submit</button>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
