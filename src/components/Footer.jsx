import logo from '../assets/tick.svg';

const Footer = () => {
  return (
    <footer className="w-full flex justify-center inset-x-0 bottom-0 fixed z-0">
      <hr />
      <img src={logo} alt="logo" />
    </footer>
  );
};

export default Footer;
