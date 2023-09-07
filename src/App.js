import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>PRINTLINES</p>
        <a
          className="App-link"
          href="https://www.printlines.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          PRINTLINES
        </a>
      </header>
    </div>
  );
}

export default App;
