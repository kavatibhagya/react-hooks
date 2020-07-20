import React, { useState, useEffect, createContext, useContext } from 'react';
import './App.css';



const numberContext = React.createContext();

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
      <numberContext.Provider value={50}>
        <Display/>

      </numberContext.Provider>
      <p>my full name is {name.firstname}{name.lastname}</p>
      <p>click to increse  my age {age}</p>
     <button onClick={handleClick}>click to increse</button>
    </div>
  );
}

function Display(){

  const value = useContext(numberContext);
  return(
    <div>the number is {value}</div>
)}

export default App;
