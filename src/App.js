import React, { useState } from "react";
import "./styles/App.css";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";

function App() {
  const [value, setValue] = useState("Текст в инпуте");

  return (
    <div className="App">
      <PostItem post ={{id: 1, title:'JavaScript', body:'Язык программирования'}} />
      <PostItem post ={{id: 2, title:'Python', body:'Язык программирования'}} />
      <PostItem post ={{id: 3, title:'С', body:'Язык программирования'}} />
      <PostItem post ={{id: 4, title:'C#', body:'Язык программирования'}} />
      <PostItem post ={{id: 5, title:'C++', body:'Язык программирования'}} />
    </div>
  );
}

export default App;
