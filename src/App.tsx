import { useState } from "react";
import "./App.css";

function App() {
  const [grid, setGrid] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  return (
    <div className="App">
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((number, cellIndex) => (
              <div className="number" key={cellIndex}>
                {number}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
