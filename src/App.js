import React from "react";

function App() {
  let likes = 0;

  function inc(){
    likes += 1;
    console.log(likes);
  }

  function dec(){
    likes -= 1;
    console.log(likes);
  }
  
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
}

export default App;
