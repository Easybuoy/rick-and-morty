import React from "react";
import "./App.css";
import CharacterWithHOC from "./CharacterWithHOC";
// import CharacterWithHook from './CharacterWithHook'; 
// import CharacterWithRender from './CharacterWithRender';
// import MutationWithHOC from './MutationWithHOC';
// import MutationWithHook from './MutationWithHook';
// import MutationWithRender from './MutationWithRender';

function App() {
  return (
    <div className="App">
      <h1>Characters</h1>
      {/* <MutationWithHOC /> */}
      {/* <MutationWithHook /> */}
      {/* <MutationWithRender /> */}
      <CharacterWithHOC />
      {/* <CharacterWithHook /> */}
      {/* <CharacterWithRender /> */}
    </div>
  );
}

export default App;
