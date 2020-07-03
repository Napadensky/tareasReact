import React from "react";
import "./App.css";


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


const Verde    = () => <div className="bg-green">     <h2>Verde</h2>       </div>;
const Azul     = () => <div className="bg-blue">      <h2>Azul</h2>        </div>;
const Rojo     = () => <div className="bg-red">       <h2>Rojo</h2>        </div>;
const Amarillo = () => <div className="bg-yell">      <h2>Amarillo</h2>    </div>;
const Morado   = () => <div className="bg-pur">       <h2>Morado</h2>      </div>;

export default App;