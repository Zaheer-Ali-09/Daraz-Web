import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img01 from "../../assets/Images/01.jpg_.avif";
import img02 from "../../assets/Images/02.jpg_.avif";
import img03 from "../../assets/Images/03.jpg_.avif";
import img04 from "../../assets/Images/04.jpg_.avif";
import img05 from "../../assets/Images/05.jpg_.avif";
import img06 from "../../assets/Images/06.jpg_.avif";
import img07 from "../../assets/Images/07.jpg_.avif";
import img08 from "../../assets/Images/08.jpg_.avif";
import img09 from "../../assets/Images/09.jpg_.avif";
import img10 from "../../assets/Images/10.jpg_.avif";
import img11 from "../../assets/Images/11.jpg_.avif";
import img12 from "../../assets/Images/12.jpg_.avif";
import img13 from "../../assets/Images/13.jpg_.avif";
import img14 from "../../assets/Images/new.jpg_.avif";
import img15 from "../../assets/Images/new1.jpg_.avif";
import img16 from "../../assets/Images/new2.jpg_.avif";
import img17 from "../../assets/Images/new43.jpg_.avif";
import img18 from "../../assets/Images/new5.jpg_.avif";
// import img19 from "../../assets/Images/13.jpg_.avif";

import ScanBanner from "../../assets/Images/scan.png";


// Images array
const images = [
    img01, img02, img03, img04, img05, img06, img07,
    img08, img09, img10, img11, img12, img13, img14, img15, img16, img17, img18
];

function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hover, setHover] = useState(false);

    // Auto slide every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    const nextSlide = () => setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));

    return (
        <div
            className="w-4.2/5 h-[60vh] mx-auto  flex overflow-hidden relative ml-10 mr-10"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* Main Slider */}
            <div className="flex-1 relative">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Prev / Next Buttons (show on hover) */}
                {hover && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 cursor-pointer"
                        >
                            <FiChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 cursor-pointer"
                        >
                            <FiChevronRight size={24} />
                        </button>
                    </>
                )}


                {/* Small Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 flex-wrap justify-center max-w-full">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-3 h-3 rounded-full ${currentIndex === idx ? "bg-white" : "bg-gray-300"}`}
                            onClick={() => setCurrentIndex(idx)}
                        ></button>
                    ))}
                </div>
            </div>

            {/* Right Side Image */}
            {/* Right Side Image */}
            <div className="w-1.3/5 ml-2 mt-3 hidden md:block">
                <img
                    src={ScanBanner}
                    alt="Scan Banner"
                    className="w-full h-full object-cover rounded-lg "
                />
            </div>

        </div>
    );
}

export default HeroSlider;
