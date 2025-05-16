// import { useState } from "react";
// // import reactLogo from "./assets/react.svg";
// // import viteLogo from "/vite.svg";
// import "./App.css";

import React from "react";

// function App() {
//   console.log("No deberias estar viendo esto");

//   return (
//     // <>

//     // </>

//     <div>
//       <p>Hello world</p>
//     </div>
//   );
// }

// export default App;

const Hello = () => {
  return (
    <div>
      <p>
        Hola mundo , <strong>desde otro componente</strong>
      </p>
    </div>
  );
};

const TestProp = props => {
  // props <-- es para colocar datos en un componente
  return (
    <div>
      <p>Hello {props.name}</p> {/* props.nombreVariable  <-- */}
    </div>
  );
};

const PiePagina = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  );
};

const App = () => {
  // APP donde se deberia colocar todo el contenido de la pagina
  const now = new Date();
  const a = 10;
  const b = 20;
  const dia = now.toString();

  console.log(a + b);

  return (
    <div>
      <Hello /> {/* Usando el componente HELLO*/}
      <p>
        {a} plus {b} is {a + b}
      </p>
      <p>Hoy es {dia}</p>
      <h1>
        <Hello />
      </h1>{" "}
      {/* Estos componentes tambien se veran afectados por las etiquetas que se les asignen */}
      <TestProp name="El hijo de puta de nico" />{" "}
      {/* name = X --- 'name' seria el nombre de la variable y a trabjar , mientras que X es su valor  */}
      <PiePagina />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("p", null, "Hello world it is ", now.toString()),
  //   React.createElement("p", null, a, " plus", b, " is ", a + b)
  // ); Este y el anteior funkan iguales , solo que este esta 'usando' react crudo
};

export default App;
