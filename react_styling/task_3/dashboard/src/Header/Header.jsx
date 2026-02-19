import holbertonLogo from '../assets/holberton-logo.jpg';

const Header = () => {
  return (
	<div className="flex items-center"> 
    <img src={holbertonLogo} className="h-[250px] w-[250px]" alt="holberton logo" />
    <h1 className='text-main font-bold text-xl'>School dashboard</h1>
  </div>
  );
}

export default Header;
