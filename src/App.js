import React from 'react';
import Profile from './profile/Profile';
import './App.css';

function App() {
  
  const handleName = (el) => alert(`Designed by `+ el );
  
  return (
    <div className="App">
     
    < Profile 
              fullName="Sirajeddine Bouasker"
              bio= "35 years old, from Nabeul, sirajdinho@hotmail.com"
              profession= "web developer"
              handleName= {handleName}
     >         
       <img src='/ProfilePic.jpg' width='150px' height='150px' alt='profile photo'/>
      
     
    </Profile>
    </div>
  );
}

export default App;
