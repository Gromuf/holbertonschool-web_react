import holbertonLogo from "../assets/holberton-logo.jpg";

const Header = () => {
  return (
    <header className="flex items-center border-b-4 border-main">
      <img
        src={holbertonLogo}
        className="h-[200px] w-[200px] md:h-[250px] md:w-[250px]"
        alt="holberton logo"
      />
      <h1 className="text-main font-bold text-2xl md:text-4xl">
        School dashboard
      </h1>
    </header>
  );
};

export default Header;
