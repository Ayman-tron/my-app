import React, { useState } from "react";
import Product from "./Product";
import styles from './App.module.css';

function App() {
  const [todos, setTodos] = useState([])
  //Preparing a piece of state to keep track of what the user typed
  const [input, setInput] = useState("")

  const addTodo = e => {
    e.preventDefault(); //This prevents a Refresh
    setTodos([...todos, input])
    setInput("");
  };
  return (
    <div className="app">
    
      <h1>Welcome to my TODO List</h1>
      <form>
      <input value = {input}  
      onChange= {e => setInput(e.target.value)} 
      type="text"/>

      <button type="submit" onClick = {addTodo} >Add todo</button>
      </form>
      <h2>List of Todods</h2>
      {todos.map(todo => (
        <p>{todo}</p>
      ))}
    </div>
  );
}

export default App;
