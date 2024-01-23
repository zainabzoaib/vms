import React, { useState } from "react";

const NewUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        // Optionally, update the UI or show a success message
        alert("User added successfully");

        // Clear the form data
        setFormData({
          username: "",
          password: "",
          email: "",
          role: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors as needed
      });
  };
  return (
    <section>
      {/* desktop view */}
      <div className="w-full h-full">
        <div className="md:container p-8">
          <h1 className="text-4xl">New User</h1>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              User Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                autoComplete=""
                className="block w-full rounded-md border-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
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
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete=""
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
                autoComplete=""
                className="block w-full rounded-md border-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
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
                value={formData.role}
                onChange={handleChange}
                autoComplete=""
                className="block w-full rounded-md border-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
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
    </section>
  );
};
export default NewUser;
