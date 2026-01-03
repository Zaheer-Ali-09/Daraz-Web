import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

function Navbar() {
  const [hideTop, setHideTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideTop(true);
      } else {
        setHideTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">

      {/* 🔶 TOP LINKS BAR */}
      {!hideTop && (
        <div className="bg-[#f15521] text-white font-medium text-[12px]">
          <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-end gap-2 md:gap-8 px-10 py-1">
            <a href="#" className="hover:underline">SAVE MORE ON APP</a>
            <a href="#" className="hover:underline">SELL ON DARAZ</a>
            <a href="#" className="hover:underline">HELP & SUPPORT</a>
            <Link to="/login" className="hover:underline">LOGIN</Link>
            <Link to="/signup" className="hover:underline">SIGN UP</Link>
            <Link to="#" className="hover:underline">زبان تبدیل کریں</Link>
          </div>
        </div>
      )}

      {/* 🔶 MAIN NAVBAR */}
      <div
        className={`bg-[#f15521] w-full z-50 transition-all duration-300 ${
          hideTop ? "fixed top-0 shadow-lg" : "relative"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-6 px-11 py-4">

          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="Daraz Logo" className="h-10" />
          </Link>

          {/* Search */}
          <div className="flex w-[460px] md:w-[650px] mt-2 md:mt-0">
            <input
              type="text"
              placeholder="Search in Daraz"
              className="flex-1 h-11 px-4 rounded-l outline-none bg-white"
            />
            <button className="bg-[#ebe0c5] px-4 text-[#f25521] rounded-r flex items-center justify-center">
              <FiSearch size={22} />
            </button>
          </div>

          {/* Cart */}
          <Link to="/cart" className="text-white text-2xl">
            <FiShoppingCart size={28} />
          </Link>

        </div>
      </div>

      {/* Spacer (important for fixed navbar) */}
      {hideTop && <div className="h-[90px]"></div>}

    </header>
  );
}

export default Navbar;
