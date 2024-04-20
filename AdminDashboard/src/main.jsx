import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from "./Pages/LoginPage";
import { CreateDoctorPage, CreatePHIPage, CreateRiskPage } from "./Pages/CreatePage"
import RootPage from './Pages/RootPage';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ViewDoctors } from './Pages/ViewPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "Login",
        element: <LoginPage />
      },
      {
        path: "",
        element: <h1 className='h-screen flex flex-row justify-center items-center text-8xl'>Welcome!</h1>
      },
      {
        path: "CreatePHI",
        element: <CreatePHIPage />
      },
      {
        path: "CreateDoctor",
        element: <CreateDoctorPage />
      },
      {
        path: "CreateRisk",
        element: <CreateRiskPage />
      },
      {
        path: "ViewDoctors",
        element: <ViewDoctors />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
