import { Link } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";


function Navbar() {
    return (
        <header className="w-full ">

            {/* 🔶 TOP LINKS BAR */}
            <div className="bg-[#f15521] text-white font-medium text-[12px]  relative">
                <div className="max-w-7xl mx-auto flex justify-end gap-8 px-6 py-1 absolute right-8 top-0">
                    <a href="#" className="hover:underline">SAVE MORE ON APP</a>
                    <a href="#" className="hover:underline">SELL ON DARAZ</a>
                    <a href="#" className="hover:underline">HELP & SUPORT</a>
                    <Link to="/login" className="hover:underline">LOGIN</Link>
                    <Link to="/signup" className="hover:underline">SIGN UP</Link>
                    <Link to="#" className="hover:underline"> زبان تبدیل کریں</Link>
                </div>
            </div>

            {/* 🔶 MAIN NAVBAR */}
            <div className="bg-[#f15521]">
                <div className="max-w-7xl mx-auto flex items-center gap-6 px-6 pt-10 pb-8">

                    {/* Daraz Logo */}
                    <Link to="/">
                        <img src={Logo} alt="Daraz Logo" className="h-10 ml-4" />
                    </Link>

                    {/* Search Box */}
                    <div className="flex flex-1">
                        <input
                            type="text"
                            placeholder="Search in Daraz"
                            className="w-160 h-11 px-6 py-4 rounded-l ml-12 outline-none bg-white"

                        />
                        <button className="bg-[#ebe0c5] px-4 text-[#f25521] rounded-r flex items-center justify-center">
                            <FiSearch size={22} />
                        </button>


                    </div>

                    {/* Cart */}
                    <Link to="/cart" className="text-white text-2xl flex items-center mr-65">
                        <FiShoppingCart size={30} />
                    </Link>


                </div>
            </div>

        </header>
    );
}

export default Navbar;
