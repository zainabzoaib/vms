import React from "react";
import code from "./QR-code.png";
import Company from "./Company.png";
function PageAfterRegistration() {
  return (
    <section>
      <div className="md:column-1 bg-midnight items-center">
        <img className="mx-auto pt-4" src={Company} alt="Logo" />;
      </div>
      {/* desktop view */}
      <div className="md:columns-1 md:block items-center">
        <div className="w-full h-full md:flex md:py-12 p-8">
          <div class="mx-auto">
            <h1 className="text-4xl text-center">QR CODE</h1>
            <p className="text-center">
              Please Scan QR code for simple gate entry to be sent to your
              email.
            </p>
            <img className="max-w-full mx-auto py-4" src={code} alt="qr-code" />
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
export default PageAfterRegistration;
