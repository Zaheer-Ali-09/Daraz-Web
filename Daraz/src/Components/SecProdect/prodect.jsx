import sec1 from "../../assets/Images/sec1.jpg_.avif";
import sec2 from "../../assets/Images/sec2.jpg_.avif";
import sec3 from "../../assets/Images/sec3.jpg_.avif";
import sec4 from "../../assets/Images/sec4.jpg_.avif";
import sec5 from "../../assets/Images/sec10.jpg_.avif";
import sec6 from "../../assets/Images/sec6.jpg_.avif";
import sec7 from "../../assets/Images/sec7.jpg_.avif";
import sec8 from "../../assets/Images/sec8.jpg_.avif";
import sec9 from "../../assets/Images/sec9.jpg_.avif";
import sec10 from "../../assets/Images/sell27.jpg_.avif";
import sec11 from "../../assets/Images/sec11.jpg_.avif";
import sec12 from "../../assets/Images/sec12.jpg_.avif";
import sec13 from "../../assets/Images/sell12.jpg_.avif";
import sec14 from "../../assets/Images/sell17.jpg_.avif";
import sec15 from "../../assets/Images/sell14.jpg_.avif";
import sec16 from "../../assets/Images/sell1.jpg_.avif";


const categories = [
    { title: "3D Printers", img: sec1 },
    { title: "Pasta, Noodle & Pizza Tools", img: sec2 },
    { title: "SIM Tools", img: sec3 },
    { title: "Screen Protectors", img: sec4 },
    { title: "Casserole Pots", img: sec5 },
    { title: "Table Lamps", img: sec6 },
    { title: "Hoodies & Sweatshirts", img: sec7 },
    { title: "Dog & Cat Electric Clippers", img: sec8 },
    { title: "Sneakers", img: sec9 },
    { title: "Education", img: sec10 },
    { title: "Dress-Up Kits", img: sec11 },
    { title: "Dining Sets", img: sec12 },
    { title: "Microphones", img: sec13 },
    { title: "Leashes & Harnesses", img: sec14 },
    { title: "Scooters", img: sec15 },
    { title: "Donate to Educate", img: sec16 },
];

export default function Categories() {
    return (
        <div className="max-w-7xl mx-auto px-8 py-6 ">
            <h2 className="text-2xl font-semibold mb-4">Categories</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
                {categories.map((item, index) => (
                    <div
                        key={index}
                        className="border p-3 flex flex-col items-center text-center hover:shadow-md transition"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="h-20 object-contain mb-2"
                        />
                        <p className="text-sm font-medium">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
