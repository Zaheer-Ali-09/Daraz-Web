import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const LastFooter = () => {
  return (
    <div className="border-t">
      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* LEFT – COUNTRIES */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <span className="font-medium text-black">Daraz International</span>

            <span>🇵🇰 Pakistan</span>
            <span>🇧🇩 Bangladesh</span>
            <span>🇱🇰 Sri Lanka</span>
            <span>🇲🇲 Myanmar</span>
            <span>🇳🇵 Nepal</span>
          </div>

          {/* CENTER – SOCIAL */}
          <div className="flex items-center gap-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <FaXTwitter className="cursor-pointer hover:text-black" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaYoutube className="cursor-pointer hover:text-red-600" />
          </div>

          {/* RIGHT – COPYRIGHT */}
          <div className="text-sm text-gray-600">
            © Daraz 2026
          </div>

        </div>
      </div>
    </div>
  );
};

export default LastFooter;
