import React, { useState } from "react";
import "./styles/App.css";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";

function App() {
  const [value, setValue] = useState("Текст в инпуте");

  return (
    <div className="App">
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
    </div>
  );
}

export default App;
