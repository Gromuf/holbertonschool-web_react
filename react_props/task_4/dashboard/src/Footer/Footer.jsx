import './Footer.css'
import { getCurrentYear, getFooterCopy } from '../utils/utils.js';

const Footer = () => {
	const currentYear = getCurrentYear();
  const footerCopy = getFooterCopy(true);
  return (
    <div className="App-footer">
      <p>Copyright {currentYear} - {footerCopy}</p>
    </div>
  )
};

export default Footer;
