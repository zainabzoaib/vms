import { React } from "react";
import Logo from "./Pages/assests/Company.png";
import register from "./Pages/assests/register.png";
import scanQrcode from "./Pages/assests/scan-qr.png";
import email from "./Pages/assests/email.jpg";
import "./App.css";
import AuthProvider from "./Pages/components/AuthProvider";
import Button from "@mui/material/Button";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleOnClick=()=>{
    navigate("/registration");
  }
  const Login=()=>{
    navigate("/login");
  }

  return (
    <section className="h-screen">
      <div className="column-1 bg-red items-center flex md:block w-screen">
        <div className="w-full">
          <img
            className="mx-auto md:pt-4 py-4 w-64"
            src={Logo}
            alt="Logo"
          />
        </div>
      </div>
      <div className="bg-white">
        <AuthProvider>
          <div className="py-4">
            <h1 className="md:text-4xl text-2xl pt-8 font-bold text-center text-text-red">
              WELCOME TO VISITORS MANAGEMENT SYSTEM
            </h1>
            <p className="text-1xl font-medium text-center pt-10">
              Follow few simple steps to visit people whenever you want!
            </p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 md:flex block md:items-center md:justify-center md:space-x-24 w-full">
            <div>
              <img
                className="mx-auto py-4 w-64"
                src={register}
                alt="Logo"
              />
              <h1 className="text-2xl md:pt-2 font-bold text-center text-text-red">
                STEP 01
              </h1>
              <p className="text-1xl font-light text-center">
                Enter the required details
              </p>
              <p className="text-1xl font-light text-center">
                on registration page
              </p>
            </div>
            <div className="pt-10 md:pt-0">
              <img
                className="mx-auto py-4 w-64"
                src={email}
                alt="Logo"
              />
              <h1 className="text-2xl md:pt-2 font-bold text-center text-text-red">
                STEP 02
              </h1>
              <p className="text-1xl font-light text-center">
                Check your email
              </p>
              <p className="text-1xl font-light text-center">for QR code</p>
            </div>
            <div className="pt-10 md:pt-0">
              <img
                className="mx-auto py-4 w-64"
                src={scanQrcode}
                alt="Logo"
              />
              <h1 className="text-2xl md:pt-2 font-bold text-center text-text-red">
                STEP 03
              </h1>
              <p className="text-1xl font-light text-center">
                Scan the QR code
              </p>
              <p className="text-1xl font-light text-center">
                on gate for verification
              </p>
            </div>
          </div>
          <div className="flex justify-center py-4 pt-6">
            <button className="flex items-center rounded-md bg-red my-5 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-magenta" onClick={handleOnClick}>
              <span className="ml-2">Click Here to Register </span>
              <ChevronRight />
            </button>
          </div>
          <div className="flex md:justify-start md:px-20 md:py-4 items-center p-2">
            <p><b>Note:</b> For administration of the application please <a className="font-bold text-center text-text-red" onClick={Login}>click here</a> to login (for admins only). For any further inquiry or question please feel free to reach us on <b>example@test.com</b>. </p>
          </div>
        </AuthProvider>
      </div>
      <div className="md:column-2 bg-red items-center">
        <div className="text-white text-center py-4">
          <p> © Zainab & keerthika 2023. All right reserved</p>
        </div>
      </div>
    </section>
  );
}

export default App;
