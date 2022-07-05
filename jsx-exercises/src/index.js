import React from 'react';
import ReactDOM from 'react-dom/client';



// ***** metodo 01 *****

// const sum = (a, b) => <h2>{a + b}</h2>;


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {sum(3, 7)}
//   </React.StrictMode>
// );



// ***** metodo 02 *****

const somma = (a, b) => a + b;
const result = <h2>The result is {somma(1,5)}</h2>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {result}
  </React.StrictMode>
);