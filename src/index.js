import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RegisterEoi from "./Pages/RegisterEoi";
import LoginPage from "./Pages/LoginPage";
import DashboardHome from "./Pages/DashboardHome";
import QRCodePage from "./Pages/Qrcode";
import AuthProvider from "./Pages/components/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Pages/components/PrivateRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="registration" element={<RegisterEoi />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="success" element={<QRCodePage />} />
          <Route element={<PrivateRoute />}>
            <Route path="dashboard" element={<DashboardHome />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
