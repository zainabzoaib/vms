import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RegisterEoi from './Pages/RegisterEoi';
import LoginPage from './Pages/LoginPage';
import DashboardHome from './Pages/DashboardHome'
import QRCodePage from './Pages/Qrcode';
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Route, Routes} from "react-router-dom";

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
    element: <QRCodePage/>
},
{  path: "dashboard",
    element: <DashboardHome/>
},
<Router>
<Routes>
  <Route path="/" element={<DashboardHome />} />
  <Route path="/" element={<LoginPage />} />
</Routes>
</Router>

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
