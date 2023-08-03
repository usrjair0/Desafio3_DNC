import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.scss'
import Home from './views/Home/Home';
import { TAREFAS } from '../src/mock/Tarefas.mock'
import TasksPen from './views/TasksPen/TasksPen';
import TasksTrash from './views/TasksTrash/TasksTrash';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={TAREFAS}/>,
  },
  {
    path: "/taskspen/:taskspenId",
    element: <TasksPen data={TAREFAS}/>,
  },
  {
    path: "/taskstrash/:taskstrashId",
    element: <TasksTrash data={TAREFAS}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
