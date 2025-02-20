// import React from 'react';
// import ReactDOM from 'react-dom';
// import { AuthContextProvider } from './authContext/AuthContext';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     < AuthContextProvider>
//        <App/>
//     </AuthContextProvider>
   
//   </React.StrictMode>,
//   document.getElementById('root')
// );



import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from './authContext/AuthContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

