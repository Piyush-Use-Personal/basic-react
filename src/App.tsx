import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0)
  const [staticCount, setStaticCount] = useState(0)

  const handleCount = () => {
    for(let i = 0; i < 30000; i++) {
      setCount(i)
      setStaticCount(1)
    }
  }
  console.log('re-rendered')
  return (
    <div className="App">
      <header className="App-header">
        <p>Dynamic count: {count}</p>
        <p>Static count: {staticCount}</p>
        <button onClick={handleCount}>change count</button>
      </header>
    </div>
  );
}

export default App;
