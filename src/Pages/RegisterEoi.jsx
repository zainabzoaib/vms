import React from "react";
import artwork from './artwork.png';
function RegisterEoi() {
    return ( 
        <section>
            <div className='w-screen h-screen md:columns-2 flex items-center'>
                <div className='w-full h-full bg-silver h-screen py-12'><h1 className="text-4xl text-center">Visitors Management System</h1><p className="text-1xl text-center">Manage your project and team in easy way</p><img className="w-96 max-w-full mx-auto my-10" src={artwork} alt="Logo" />;</div>
                <div className='w-full h-full h-screen py-12'><h1 className="text-4xl">Register</h1></div>
                </div>
        </section>

    )
}
export default RegisterEoi