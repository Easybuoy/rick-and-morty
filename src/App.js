import React from "react";
import "./App.css";
import CharacterWithHOC from "./CharacterWithHOC";
import CharacterWithHook from './CharacterWithHook'; 
import CharacterWithRender from './CharacterWithRender';

function App() {
  return (
    <div className="App">
      <h1>Characters</h1>
      <CharacterWithHOC />
      {/* <CharacterWithHook /> */}
      {/* <CharacterWithRender /> */}
    </div>
  );
}

export default App;
