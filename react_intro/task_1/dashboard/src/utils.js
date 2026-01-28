const getCurrentYear = () => {
  return new Date().getFullYear();
};

const getFooterCopy = (isIndex) => {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
};

export { getCurrentYear, getFooterCopy };
