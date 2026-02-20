import holbertonLogo from '../assets/holberton-logo.jpg';

const Header = () => {
  return (
    <header className="flex items-center border-b-4 border-main max-[520px]:flex-col"> 
      <img 
        src={holbertonLogo} 
        className="h-[250px] w-[250px]" 
        alt="holberton logo" 
      />
      <h1 className="text-main font-bold text-4xl max-[520px]:text-2xl">
        School dashboard
      </h1>
    </header>
  );
}

export default Header;