import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RegisterEoi from './Pages/RegisterEoi';
import LoginPage from './Pages/LoginPage';
import DashboardHome from './Pages/DashboardHome'
import Entries from './Pages/Entries';
import Users from './Pages/Users';
import PageAfterRegistration from './Pages/PageAfterRegistration';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([{
    path: "/",
    element: <App/>
}, 
  {  path: "register",
    element: <RegisterEoi/>
},
{  path: "login",
    element: <LoginPage/>
},
{  path: "success",
    element: <PageAfterRegistration/>
},
{  path: "dashboard",
    element: <DashboardHome/>
},
{  path: "dashboard/entries",
    element: <Entries/>
},
{  path: "dashboard/users",
    element: <Users/>
},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <React.StrictMode>
<RouterProvider router = { router }/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
