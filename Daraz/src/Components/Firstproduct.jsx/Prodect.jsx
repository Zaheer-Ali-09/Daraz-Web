import Product1 from "../../assets/Images/prodecr01.jpg_.avif";
import Product2 from "../../assets/Images/prodecr02.jpg_.avif";
import Product3 from "../../assets/Images/prodecr03.jpg_.avif";
import Product4 from "../../assets/Images/prodecr04.png_.avif";
import Product5 from "../../assets/Images/prodecr05.jpg_400x400q80.jpg_.avif";
import Product6 from "../../assets/Images/prodecr08.png_.avif";


const products = [
    {
        id: 1,
        title: "Vital - Tea Zip Lock Pack - 900 gm",
        price: "Rs.1,598",
        oldPrice: "Rs.1,800",
        discount: "-11%",
        image: Product1,
    },
    {
        id: 2,
        title: "Pampers Taped Baby Diapers (Size 5)",
        price: "Rs.2,248",
        oldPrice: "Rs.2,650",
        discount: "-15%",
        image: Product2,
    },
    {
        id: 3,
        title: "Nestle Everyday Powder 850g",
        price: "Rs.1,549",
        oldPrice: "Rs.1,770",
        discount: "-12%",
        image: Product3,
    },
    {
        id: 4,
        title: "Nestle Cerelac - 3 Fruits",
        price: "Rs.375",
        oldPrice: "Rs.450",
        discount: "-17%",
       image: Product4,
    },
    {
        id: 5,
        title: "Petrella Bubble Gun Machine",
        price: "Rs.414",
        oldPrice: "Rs.999",
        discount: "-59%",
        image: Product5,
    },
    {
        id: 6,
        title: "Glutathione + Vitamin C Tablets",
        price: "Rs.661",
        oldPrice: "Rs.2,000",
        discount: "-67%",
       image: Product6,
    },
];

export default function ProductGrid() {
    return (
        <div className="max-w-7xl mx-auto px-10 py-6">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-orange-500">
                    On Sale Now
                </h2>
                <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition">
                    SHOP ALL PRODUCTS
                </button>
            </div>

            {/* Products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white  hover:shadow-lg transition"
                    >
                        {/* Image */}
                        <div className="relative p-2">
                            <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                                LIVE NOW
                            </span>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 object-contain"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-3">
                            <p className="text-sm text-gray-800 line-clamp-2">
                                {item.title}
                            </p>

                            <p className="text-orange-500 font-semibold mt-2">
                                {item.price}
                            </p>

                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span className="line-through">{item.oldPrice}</span>
                                <span>{item.discount}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
