import logo from '../assets/logo.svg';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center w-full mb-10 pt-3">
      <div className="flex w-10 object-contain items-center">
        <img src={logo} alt="logo" className="w-7 pr-1 object-contain" />
        <h1 className="font-satoshi font-bold text-xl text-[#1d1d1f]">
          Abstracto.
        </h1>
      </div>
      <button
        type="button"
        onClick={() => window.open('https://github.com/samarjiit')}
        className="black_btn"
      >
        GitHub
      </button>
    </nav>
  );
};

export default Nav;
