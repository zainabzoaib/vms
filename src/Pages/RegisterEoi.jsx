import React, { useState } from "react";
import Logo from "./assests/Company.png";
import artwork from "./assests/artwork.png";
import { useNavigate } from "react-router-dom";
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
        navigate("/success", { state: { formData: JSON.stringify(formData) } });
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors as needed
      });
      
  };

  return (
    <section>
      <div className="md:column-1 bg-red md:items-center">
        <img className="mx-auto pt-4 w-64" src={Logo} alt="Logo" />;
      </div>
      {/* desktop view */}
      <div className="md:columns-2 hidden md:flex md:items-center h-screen">
        <div className="w-full bg-Light-orange md:items-center md:column-1 h-full flex">
          <div className="container py-4">
            <h1 className="text-3xl font-bold text-center text-text-red">
              VISITORS MANAGEMENT SYSTEM
            </h1>
            <p className="text-1xl font-medium text-center">
              Manage your project and team in easy way
            </p>
            <img
              className="w-9/12 max-w-full mx-auto"
              src={artwork}
              alt="artwork"
            />
          </div>
        </div>
        <div className="w-full md:items-center md:column-1 h-full flex ">
          <div class="container py-4">
            <h1 className="text-3xl font-bold mb-8 text-text-red text-center">
              REGISTRATION FORM
            </h1>
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="off"
                  class="form-input px-4 py-1.5 rounded-md border-lightGrey w-full"
                />
              </div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900 mt-3"
              >
                Phone
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required="required"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="off"
                  className="form-input px-4 py-1.5 rounded-md border-lightGrey w-full"
                />
              </div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 mt-3"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                  className="form-input px-4 py-1.5 rounded-md border-lightGrey w-full"
                />
              </div>

              <label
                htmlFor="person_meeting"
                className="block text-sm font-medium leading-6 text-gray-900 mt-3"
              >
                Person Meeting
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="person_meeting"
                  id="person_meeting"
                  required
                  value={formData.person_meeting}
                  onChange={handleChange}
                  autoComplete="off"
                  className="form-input px-4 py-1.5 rounded-md border-lightGrey w-full"
                />
              </div>
              <label
                htmlFor="purpose_of_visit"
                className="block text-sm font-medium leading-6 text-gray-900 mt-3"
              >
                Purpose of visit
              </label>
              <div className="mt-1">
                <textarea
                  type="text"
                  name="purpose_of_visit"
                  id="purpose_of_visit"
                  required
                  value={formData.purpose_of_visit}
                  onChange={handleChange}
                  autoComplete="off"
                  className="form-input px-4 py-1.5 rounded-md border-lightGrey w-full"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-red my-5 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-margenta"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* small device view */}
      <div className="columns-1 block bg-Light-orange md:hidden items-center p-5">
        <div className="w-full">
        <h1 className="text-2xl font-bold text-center text-text-red">
              VISITORS MANAGEMENT SYSTEM
            </h1>
            <p className="text-1xl font-medium text-center">
              Manage your project and team in easy way
            </p>
          <div className="artwork-bg">
            <div class="container mx-auto overlay-bg z-10">
            <h1 className="text-xl font-bold mb-3 mt-10 text-text-red text-left">
              REGISTRATION FORM
            </h1>
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="off"
                  class="form-input px-4 py-1.5 rounded-md border-lightGrey w-full"
                />
              </div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900 mt-3"
              >
                Phone
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required="required"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="off"
                  className="form-input px-4 py-1.5 rounded-md border-lightGrey w-full"
                />
              </div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 mt-3"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                  className="form-input px-4 py-1.5 rounded-md border-lightGrey w-full"
                />
              </div>

              <label
                htmlFor="person_meeting"
                className="block text-sm font-medium leading-6 text-gray-900 mt-3"
              >
                Person Meeting
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="person_meeting"
                  id="person_meeting"
                  required
                  value={formData.person_meeting}
                  onChange={handleChange}
                  autoComplete="off"
                  className="form-input px-4 py-1.5 rounded-md border-lightGrey w-full"
                />
              </div>
              <label
                htmlFor="purpose_of_visit"
                className="block text-sm font-medium leading-6 text-gray-900 mt-3"
              >
                Purpose of visit
              </label>
              <div className="mt-1">
                <textarea
                  type="text"
                  name="purpose_of_visit"
                  id="purpose_of_visit"
                  required
                  value={formData.purpose_of_visit}
                  onChange={handleChange}
                  autoComplete="off"
                  className="form-input px-4 py-1.5 rounded-md border-lightGrey w-full"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-red my-5 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-margenta"
              >
                SUBMIT
              </button>
            </form>
            </div>
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
};
export default RegistrationForm;
