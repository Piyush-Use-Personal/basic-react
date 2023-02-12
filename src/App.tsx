import React from "react";
import logo from "./logo.svg";
import "./App.css";
import usePerson from "./hooks/usePerson";

function App() {
  const { name, role, onChange } = usePerson();

  const changeName = () => {
    onChange('name', 'name changed')
  }
  const changeRole = () => {
    onChange('role', 'role changed')
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Name: {name}</p>
        <p>Role: {role}</p>
        <button onClick={changeName}>Change name</button>
        <button onClick={changeRole}>Change role</button>
      </header>
    </div>
  );
}

export default App;
