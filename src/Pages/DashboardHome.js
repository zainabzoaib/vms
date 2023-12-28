import React from "react";
import Company from "./Company.png";

function DashboardHome() {
    return (
      <section>
        <div className="md:column-1 bg-midnight items-center">
          <img className="mx-auto pt-4" src={Company} alt="Logo" />;
        </div>
        
        <div className="md:column-2 bg-midnight items-center">
          <div className="text-white text-center py-4">
            <p> © Zainab & keerthika 2023. All right reserved</p>
          </div>
        </div>
      </section>
    );
  }

export default DashboardHome;
