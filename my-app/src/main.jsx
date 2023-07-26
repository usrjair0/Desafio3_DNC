import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.scss'
import Home from './views/Home';
import {TAREFAS} from '../src/mock/Tarefas.mock'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={TAREFAS}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
