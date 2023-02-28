import "./App.css";
import GetPrompt from "./components/getPrompt";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header"></header>
        <body>
          <h1>Game Generator</h1>
          <div className="gameBody" id="hardware">
            <div id="screen">
              <GetPrompt />
            </div>
            <Button variant="primary" id="Button">Generate</Button>
          </div>
        </body>
      </div>
    </>
  );
}

export default App;

// https://gameideasgenerator.web.app/
