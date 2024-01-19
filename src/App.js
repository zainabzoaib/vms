import logo from "./logo.svg";
import "./App.css";
import AuthProvider from "./Pages/components/AuthProvider";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Hello from the other side</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React!
          </a>
        </header>
      </AuthProvider>
    </div>
  );
}

export default App;
