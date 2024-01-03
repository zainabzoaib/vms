import React from "react";
function NewUser() {
  return (
    <section>
      {/* desktop view */}
      <div className="w-full h-full h-screen py-12">
        <div class="container">
          <h1 className="text-4xl">New User</h1>
          <label
            htmlFor="fname"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {" "}
            First Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="fname"
              id="fname"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <label
            htmlFor="lname"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Last Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="lname"
              id="lname"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <label
            htmlFor="role"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Role
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="role"
              id="role"
              autoComplete=""
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <label
            htmlFor="Password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="Password"
              id="Password"
              autoComplete=""
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <label
            htmlFor="Confirm Password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Confirm Password
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="Confirm Password"
              id="Confirm Password"
              autoComplete=""
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-tahiti my-5 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-metal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tahiti"
          >
            SUBMIT
          </button>
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
              <h1 className="text-2xl text-center">New User</h1>
              <label
                htmlFor="fname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                First Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="lname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="role"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Role
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="role"
                  id="role"
                  autoComplete=""
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="Password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="Password"
                  id="Password"
                  autoComplete=""
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="Confirm Password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="Confirm Password"
                  id="Confirm Password"
                  autoComplete=""
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-tahiti my-5 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-metal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tahiti"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NewUser;
