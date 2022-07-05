import React from 'react';
import ReactDOM from 'react-dom/client';



// ****** soluzione 01 function ******

const sayHello = (name) => <h1>Hello, {name}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {sayHello('Vincenzo')}
  </React.StrictMode>
);


// ****** soluzione 02 variabile ******


// let name = 'Vincenzo';
// const hello = <h1>Hello, {name}</h1>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {hello}
//   </React.StrictMode>
// );
