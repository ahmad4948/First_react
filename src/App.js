import logo from './logo.svg';
import house from'./bc.jpg';
import house2 from'./bx.jpg';
import house3 from'./oki.jpg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
export function App(props) {
  return (
    <div className="App">
      <Nav/>
      <Content/>
      <Footer/>
          </div>
  );
}


function Nav(){
    
    return(

        <ul>
        <li className="bb"><span>Breaking Bad</span></li>
        <li className="x xy">Editorial </li>
        <li className="x">Episodes</li>
        <li className="x">Support</li>
        </ul>
        

        
    );
}
function Content(){ 
return(
    <div className="content-container">
  <h1>Ready to watch the best TV show in history?</h1>
<img src={house3} width={1520} height={850} />
    
    
    </div>
);
}

function Footer(){
    return(
          <h4>  Copyright © 2023 Breaking Bad Website. All Rights Reserved.</h4>
    
    );
}
export default App;
