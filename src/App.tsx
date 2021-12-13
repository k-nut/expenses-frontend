import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Login onLogin={() => setIsLoggedIn(true)} />
      {isLoggedIn ? <ExpenseList /> : "Bitte erste einloggen"}
    </div>
  );
}

export default App;
