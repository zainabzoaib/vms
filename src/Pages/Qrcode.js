import React from "react";
//import code from "./assests/QR-code.png";
import Logo from "./assests/Company.png";
import { useLocation, Link, useNavigate  } from 'react-router-dom';
import QRCode from 'qrcode.react';

const QRCodePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const formData = JSON.parse(location.state.formData);
  if (!formData) {
    return (
      <div>
        <p>Error: Unable to retrieve form data.</p>
        <Link to="/register">Go back to registration</Link>
      </div>
    );
  }
 

  const onImageClick=()=>{
    navigate("/");
  }

  return (
    <section className="h-screen">
      <div className="md:column-1 bg-red items-center">
        <img className="mx-auto pt-4 w-64" src={Logo} alt="Logo" onClick={onImageClick}/>;
      </div>
      {/* desktop view */}
      <div className="md:columns-1 flex items-center h-full">
        <div className="w-full block py-12 p-8">
          <div className="mx-auto">
            <h1 className="text-4xl text-center">Registration Successful</h1>
            <p className="text-center">
              Please Scan QR code for simple gate entry.
            </p>
            <QRCode className="mx-auto mt-8" value={JSON.stringify(formData)} size={300}/>
          </div>
        </div>
      </div>
      <div className="md:column-2 bg-red items-center">
        <div className="text-white text-center py-4">
          <p> © Zainab & keerthika 2023. All right reserved</p>
        </div>
      </div>
    </section>
  );
  }
export default QRCodePage;
