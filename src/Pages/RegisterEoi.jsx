import React, { useState } from "react";
import artwork from "./assests/artwork.png";
import Company from "./assests/Company.png";
import { useNavigate } from 'react-router-dom';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    purpose_of_visit: "",
    person_meeting: "",
  });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/visitor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("User added successfully");
        navigate('/success', { state: { formData: JSON.stringify(formData) } });
        // Optionally, update the UI or show a success message
       
        // Clear the form data
        // setFormData({
        //   name: "",
        //   phone: "",
        //   email: "",
        //   purpose_of_visit: "",
        //   person_meeting: "",
        // });
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors as needed
      });
  };

  return (
    <section>
      <div className="md:column-1 bg-midnight items-center">
        <img className="mx-auto pt-4" src={Company} alt="Logo" />;
      </div>
      {/* desktop view */}
      <div className="md:columns-2 hidden md:block items-center">
        <div className="w-full h-full bg-silver h-screen py-12">
          <h1 className="text-4xl text-center">Visitors Management System</h1>
          <p className="text-1xl text-center">
            Manage your project and team in easy way
          </p>
          <img
            className="w-80 max-w-full mx-auto my-10"
            src={artwork}
            alt="artwork"
          />
        </div>
        <div className="w-full h-full h-screen py-12">
          <div class="container">
            <h1 className="text-4xl">Register</h1>
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="phone"
                  className="block w-full rounded-md border-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="block w-full rounded-md border-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
             
              <label
                htmlFor="purpose_of_visit"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
               Purpose of visit
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="purpose_of_visit"
                  id="purpose_of_visit"
                  required
                  value={formData.purpose_of_visit}
                  onChange={handleChange}
                  autoComplete="text"
                  className="block w-full rounded-md border-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
              </div>
              <label
                htmlFor="person_meeting"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Person Meeting
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="person_meeting"
                  id="person_meeting"
                  required
                  value={formData.person_meeting}
                  onChange={handleChange}
                  autoComplete="text"
                  className="block w-full rounded-md border-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
              </div>
              <button
                type="submit"
                className="rounded-md bg-tahiti my-5 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-metal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tahiti"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* small device view */}
      <div className="columns-1 block bg-silver md:hidden items-center p-8">
        <div className="w-full h-full">
          <h1 className="text-3xl text-center">Visitors Management System</h1>
          <p className="text-1xl text-center">
            Manage your project and team in easy way
          </p>
          <div className="artwork-bg">
            <div class="container mx-auto overlay-bg z-10">
              <h1 className="text-2xl text-center">Register</h1>
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {" "}
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="block w-full rounded-md border-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
                <label
                  htmlFor="tel"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone
                </label>
                <div className="mt-2">
                  <input
                    id="tel"
                    name="tel"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete=""
                    className="block w-full rounded-md border-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
                <label
                  htmlFor="Person to meet"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name of person to meet
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Person-to-meet"
                    id="Person-to-meet"
                    value={formData.person_to_meet}
                    onChange={handleChange}
                    autoComplete=""
                    className="block w-full rounded-md border-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
                <label
                  htmlFor="Reason to meet"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Reason to meet
                </label>
                <div className="mt-2">
                  <input
                    type="textarea"
                    name="Reason-to-meet"
                    id="Reason-to-meet"
                    value={formData.reason_to_meet}
                    onChange={handleChange}
                    autoComplete=""
                    className="block w-full rounded-md border-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
                <button
                  className="rounded-md bg-tahiti my-5 px-10 py-2 hover:bg-metal"
                >
                  SUBMIT
                </button>
              </form>
            </div>
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
};
export default RegistrationForm;
