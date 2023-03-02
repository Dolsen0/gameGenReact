import React, { useState } from "react";
import "./App.css";
import GetPrompt from "./components/getPrompt";
import Button from "react-bootstrap/Button";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleClick = () => {
    setRefresh(!refresh);
  };

  return (
    <>
      <div className="App">
        <header className="App-header"></header>
        <body>
          <h1>Game Generator</h1>
          <div className="gameBody" id="hardware">
            <div id="screen">
              <GetPrompt refresh={refresh} />
            </div>
            <Button variant="primary" id="Button" onClick={handleClick}>
              Generate
            </Button>
          </div>
        </body>
      </div>
    </>
  );
}

export default App;