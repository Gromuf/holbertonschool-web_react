import WithLogging from "../HOC/WithLogging";
import React, { useState } from "react";

const Login = ({ logIn = () => {}, email: initialEmail = "", password: initialPassword = "" }) => {
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [formData, setFormData] = useState({
    email: initialEmail,
    password: initialPassword
  });

  const validateForm = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && (password ? password.length >= 8 : false);
  };

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    setFormData((prevData) => ({ ...prevData, email }));
    setEnableSubmit(validateForm(email, formData.password));
  };

  const handleChangePassword = (event) => {
    const password = event.target.value;
    setFormData((prevData) => ({ ...prevData, password }));
    setEnableSubmit(validateForm(formData.email, password));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn(formData.email, formData.password);
  };

  return (
      <div className="h-full mt-5 md:ml-5 pt-5 border-t-2 border-main">
        <p className="mb-4">Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit} className="w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-4 items-start">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full md:w-auto">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChangeEmail}
                className="border border-gray-400 rounded px-2 py-1 w-full md:w-auto focus:outline-main"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full md:w-auto">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChangePassword}
                className="border border-gray-400 rounded px-2 py-1 w-full md:w-auto focus:outline-main"
              />
            </div>
            <input
              type="submit"
              value="OK"
              disabled={!enableSubmit}
              className={`border border-gray-400 px-4 py-1 rounded w-full sm:w-auto ${
                enableSubmit ? "hover:bg-gray-100 cursor-pointer" : "opacity-50 cursor-not-allowed"
              }`}
            />
          </div>
        </form>
      </div>
    );
  };

export default WithLogging(Login);
