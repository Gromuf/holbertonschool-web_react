import { getCurrentYear, getFooterCopy } from "../utils/utils.js";

const Footer = () => {
  const currentYear = getCurrentYear();
  const footerCopy = getFooterCopy(true);
  return (
    <div className="w-full flex justify-center items-center py-4 bg-white border-t-2 border-main">
      <p className="text-center italic text-gray-700 text-sm md:text-base px-4">
        Copyright {currentYear} - {footerCopy}
      </p>
    </div>
  );
};

export default Footer;
