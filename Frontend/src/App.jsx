import React, { useState } from 'react';

function App(){
const [name,setname]=useState("Sourabh");

  return (
    <div>Hello World {name}</div>
  )
}

export default App;