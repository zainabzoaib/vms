import React, { useState } from "react";
import Company from "./assests/Company.png";
import Frame from "./assests/Frame.png";
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
      <div className="md:column-1 bg-red items-center">
        <img className="mx-auto pt-4 w-64" src={Company} alt="Logo" />;
      </div>
      {/* desktop view */}
      <div className="md:columns-2 hidden md:block md:items-center h-screen md:flex ">
        <div className="w-full md:items-center md:column-1 h-full flex">
          {/* Back button icon */}
          <div className="container py-4">
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
                className="rounded-md bg-red my-5 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-dark-red "
              >
                Login
              </button>
            </form>
          </div>
        </div>

        <div className="w-full h-full h-screen py-12 flex bg-Light-orange items-center">
          <img
            className="w-80 max-w-full mx-auto py-4"
            src={Frame}
            alt="artwork"
          />
        </div>
      </div>
      {/* small device view */}
      <div className="columns-1 md:hidden md:block bg-silver p-5">
        <div className="w-full h-full items-center">
          <div className="frame-bg">
            <div className="container py-12 overlay-bg">
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
                className="rounded-md bg-red my-5 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-dark-red "
              >
                Login
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
export default LoginPage;
