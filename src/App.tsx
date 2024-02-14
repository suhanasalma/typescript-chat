import React from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/router';
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-image-lightbox/style.css';
function App() {
  return (
    <> <RouterProvider router={router}/>
     <ToastContainer/>
    </>
   
  );
}

export default App;
