import React, { useState } from "react";
//import { useNavigate } from 'react-router-dom';
import Frame from "./assests/Frame.png";
import Company from "./assests/Company.png";
import { useAuth } from "./components/AuthProvider";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (username !== "" && password !== "") {
      auth.loginAction(username, password);
      return;
    }
    alert("please provide a valid input");
  };

  return (
    <section>
      <div className="md:column-1 bg-midnight items-center">
        <img className="mx-auto pt-4" src={Company} alt="Logo" />;
      </div>
      {/* desktop view */}
      <div className="md:columns-2 hidden md:block ">
        <div className="w-full h-full h-screen items-center">
          {/* Back button icon */}
          <div className="container py-12">
            <button
              onClick=""
              className="flex hover:bg-blue-700 font-bold rounded w-full"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Visitors Management
            </button>
          </div>
          <div className="container py-12">
            <h1 className="text-4xl">Login</h1>
            <form onSubmit={handleSubmitEvent}>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-tahiti my-5 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-metal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tahiti"
              >
                Login
              </button>
            </form>
          </div>
        </div>

        <div className="w-full h-full h-screen py-12 flex bg-bermuda items-center">
          <img
            className="w-80 max-w-full mx-auto py-4"
            src={Frame}
            alt="artwork"
          />
        </div>
      </div>
      {/* small device view */}
      <div className="columns-1 md:hidden md:block bg-silver">
        <div className="w-full h-full h-screen items-center">
          {/* Back button icon */}
          <div className="container py-12">
            {/* <button
              onClick=""
              className="flex hover:bg-blue-700 font-bold rounded w-full"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Visitors Management
            </button> */}
          </div>
          <div className="frame-bg">
            <div className="container py-12 overlay-bg">
              <h1 className="text-4xl">Login</h1>
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
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete=""
                  className="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {/* <button
                type="submit"
                className="rounded-md bg-tahiti my-5 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-metal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tahiti"
              >
                SUBMIT
              </button> */}
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
export default LoginPage;
