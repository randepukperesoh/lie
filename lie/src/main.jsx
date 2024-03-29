import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Test } from './assets/components/Test/Test.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  { 
    path: "/test/:param",
    element: <Test/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>,
)
