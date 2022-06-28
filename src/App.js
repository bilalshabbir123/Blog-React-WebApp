import React,{ useState } from 'react';
import Student from './Student';
import './App.css';

function App(){
const [name,setName]=useState("Bilal")
  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <Student name={name} />
      <button onClick={()=>{setName("Billo")}}>Update Button</button>
    </div>
  );
}
export default App;