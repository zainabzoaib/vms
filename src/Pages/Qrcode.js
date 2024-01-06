import React from "react";
//import code from "./assests/QR-code.png";
import Company from "./assests/Company.png";
import { useLocation, Link  } from 'react-router-dom';
import QRCode from 'qrcode.react';

const QRCodePage = () => {
  const location = useLocation();
  const formData = JSON.parse(location.state.formData);
  if (!formData) {
    return (
      <div>
        <p>Error: Unable to retrieve form data.</p>
        <Link to="/register">Go back to registration</Link>
      </div>
    );
  }
  return (
    <section>
      <div className="md:column-1 bg-midnight items-center">
        <img className="mx-auto pt-4" src={Company} alt="Logo" />;
      </div>
      {/* desktop view */}
      <div className="md:columns-1 md:block items-center">
        <div className="w-full h-full md:flex md:py-12 p-8">
          <div class="mx-auto">
            <h1 className="text-4xl text-center">Registration Successful</h1>
            <p className="text-center">
              Please Scan QR code for simple gate entry.
            </p>
            <QRCode className="mx-auto mt-8" value={JSON.stringify(formData)} size={400}/>
          </div>
        </div>
      </div>
      <div className="md:column-2 bg-midnight items-center">
        <div className="text-white text-center py-4">
          <p> © Zainab & keerthika 2023. All right reserved</p>
        </div>
      </div>
    </section>
  );
  }
export default QRCodePage;
