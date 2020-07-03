import React from "react";
import "./App.css";

import {Verde}     from  './component/verde';
import {Azul}      from  './component/azul';
import {Rojo}      from  './component/rojo';
import {Amarillo}  from  './component/amarillo';
import {Morado}    from  './component/morado';



function App() {
  return (
    <div className="cont">
      <div className="App">
      
        <   Verde    />
        <   Azul     />
        <   Rojo     />
        <   Amarillo />
        <   Morado   />

      </div>
    </div>
  );
}


export default App;