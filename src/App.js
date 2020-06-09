import React from 'react';
//import logo from './logo.svg';
//import Hello from './Hello';
import './App.css';
import './Hello.css'

function App({name , age}) {
  return <div> 
   <strong>Hello Shahzeb Ansari </strong>
   <h1 className= "myname"> Electrical Engineer</h1>
   <ol> 
     <li> Matric done in 2007</li>
     <li>FSc done in 2009</li>
     <li>Bachelors graduation in 2013</li>
   </ol>
   <br/><br/>
   <h2 className= "myrealname">Interests</h2>
   <ul>
     <li>Book Reading</li>
     <li>Programmung</li>
   </ul>
  </div>
    
}

export default App;
