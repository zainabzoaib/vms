import React from "react";
import artwork from './artwork.png';
import Company from './Company.png';
function RegisterEoi() {
    return ( 
    <section>
            <div className="md:column-1 bg-midnight items-center">
            <img className="mx-auto pt-4" src={Company} alt="Logo" />;
            </div>
            {/* desktop view */}
            <div className='md:columns-2 hidden md:block items-center'>
            <div className='w-full h-full bg-silver h-screen py-12'>
                <h1 className="text-4xl text-center">Visitors Management System</h1><p className="text-1xl text-center">Manage your project and team in easy way</p><img className="w-80 max-w-full mx-auto my-10" src={artwork} alt="artwork" /></div>

            <div className='w-full h-full h-screen py-12'>
                <div class="container"><h1 className="text-4xl">Register</h1>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900"> Name</label>
                    <div className="mt-2">
                     <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                     </div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div className="mt-2">
                     <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                     </div>
                <label htmlFor="tel" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                    <div className="mt-2">
                     <input
                        id="tel"
                        name="tel"
                        type="tel"
                        autoComplete=""
                        className="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                     </div>
                <label htmlFor="Person to meet" className="block text-sm font-medium leading-6 text-gray-900">Name of person to meet</label>
                    <div className="mt-2">
                     <input
                        type="text"
                        name="Person-to-meet"
                        id="Person-to-meet"
                        autoComplete=""
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                     </div> 
                <label htmlFor="Reason to meet" className="block text-sm font-medium leading-6 text-gray-900">Reason to meet</label>
                    <div className="mt-2">
                     <input
                        type="textarea"
                        name="Reason-to-meet"
                        id="Reason-to-meet"
                        autoComplete=""
                        className="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                     </div>
                     <button type="submit" className="rounded-md bg-tahiti my-5 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-metal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tahiti">SUBMIT</button>
                </div>
            </div>
        </div>
        {/* small device view */}
        <div className='columns-1 block bg-silver md:hidden items-center p-8'>
            <div className="w-full h-full">
                <h1 className="text-3xl text-center">Visitors Management System</h1><p className="text-1xl text-center">Manage your project and team in easy way</p>
            <div className="artwork-bg">
            <div class="container mx-auto overlay-bg z-10"><h1 className="text-2xl text-center">Register</h1>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900"> Name</label>
                    <div className="mt-2">
                     <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                     </div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div className="mt-2">
                     <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                     </div>
                <label htmlFor="tel" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                    <div className="mt-2">
                     <input
                        id="tel"
                        name="tel"
                        type="tel"
                        autoComplete=""
                        className="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                     </div>
                <label htmlFor="Person to meet" className="block text-sm font-medium leading-6 text-gray-900">Name of person to meet</label>
                    <div className="mt-2">
                     <input
                        type="text"
                        name="Person-to-meet"
                        id="Person-to-meet"
                        autoComplete=""
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                     </div> 
                <label htmlFor="Reason to meet" className="block text-sm font-medium leading-6 text-gray-900">Reason to meet</label>
                    <div className="mt-2">
                     <input
                        type="textarea"
                        name="Reason-to-meet"
                        id="Reason-to-meet"
                        autoComplete=""
                        className="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                     </div>
                     <button type="submit" className="rounded-md bg-tahiti my-5 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-metal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tahiti">SUBMIT</button>
                </div>
            </div>
            </div>
            </div>
            
        <div className="md:column-2 bg-midnight items-center">
           <div className="text-white text-center py-4"><p> © Zainab & keerthika 2023. All right reserved</p></div>
                </div>
    </section>
)
}
export default RegisterEoi