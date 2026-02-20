import React from "react";
import holbertonLogo from "../assets/holberton-logo.jpg";

const Header = () => {
  return (
    <header className="flex items-center border-b-4 border-main max-[912px]:flex-col max-[912px]:text-center p-4">
      <img
        src={holbertonLogo}
        className="max-w-full h-auto max-h-[150px] md:max-h-[250px] object-contain"
        alt="holberton logo"
      />
      <h1 className="text-main font-bold text-2xl md:text-4xl ml-4 max-[912px]:ml-0 max-[912px]:mt-4">
        School dashboard
      </h1>
    </header>
  );
};

export default Header;
