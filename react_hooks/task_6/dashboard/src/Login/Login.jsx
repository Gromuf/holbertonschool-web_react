import WithLogging from "../HOC/WithLogging";
import React from "react";
import useLogin from "../hooks/useLogin";

const Login = ({ logIn = () => {} }) => {
  const {
    email,
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleLoginSubmit,
  } = useLogin(logIn);

  return (
    <div className="h-full mt-5 md:ml-5 pt-5 border-t-2 border-main">
      <p className="mb-4">Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit} className="w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-4 items-start">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full md:w-auto">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
              className="border border-gray-400 rounded px-2 py-1 w-full md:w-auto focus:outline-main"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full md:w-auto">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleChangePassword}
              className="border border-gray-400 rounded px-2 py-1 w-full md:w-auto focus:outline-main"
            />
          </div>
          <input
            type="submit"
            value="OK"
            disabled={!enableSubmit}
            className={`border border-gray-400 px-4 py-1 rounded w-full sm:w-auto ${
              enableSubmit
                ? "hover:bg-gray-100 cursor-pointer"
                : "opacity-50 cursor-not-allowed"
            }`}
          />
        </div>
      </form>
    </div>
  );
};

export default WithLogging(Login);
