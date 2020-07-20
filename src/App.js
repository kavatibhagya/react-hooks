import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

     const [age,setAge]=useState(20);
     const [name ,setName]= useState({firstname:'bhagya',lastname:'kavati'});
     const handleClick = () => {
          setAge(age+1);
     }
     useEffect(()=>{
       setName({firstname:'ridhi',lastname:'dand'})
     },[])
     useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/albums")
       .then(response =>console.log(response))
       ;
     })
     

  return (
    <div className="App">
      <p>my full name is {name.firstname}{name.lastname}</p>
      <p>click to increse  my age {age}</p>
     <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App;
