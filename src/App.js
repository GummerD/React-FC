import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(5);
  const [value, setValue] = useState('Именяемый текст');

  function inc(){
    setLikes(likes + 1);
  }

  function dec(){
    setLikes(likes - 1);
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <hr />
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <hr />
      <h2>{value}</h2>
      <input 
        type="text" 
        value={value} 
        //** двухсторонее связывание, такие компоненты называются управляемыми */
        onChange={event => setValue(event.target.value)}  
      />
    </div>
  );
}

export default App;
