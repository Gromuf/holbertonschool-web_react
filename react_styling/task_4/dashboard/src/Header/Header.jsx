import holbertonLogo from "../assets/holberton-logo.jpg";

const Header = () => {
  return (
    <header className="flex flex-row items-center border-b-4 border-main max-[520px]:flex-col max-[520px]:justify-center">
      <img
        src={holbertonLogo}
        className="h-[250px] w-[250px] max-[520px]:h-[200px] max-[520px]:w-[200px]"
        alt="holberton logo"
      />
      <h1 className="text-main font-bold text-4xl max-[520px]:text-2xl max-[520px]:mb-4">
        School dashboard
      </h1>
    </header>
  );
};

export default Header;
