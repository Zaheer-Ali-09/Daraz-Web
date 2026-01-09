import Product1 from "../../assets/Images/prodecr01.jpg_.avif";
import Product2 from "../../assets/Images/prodecr02.jpg_.avif";
import Product3 from "../../assets/Images/prodecr03.jpg_.avif";
import Product4 from "../../assets/Images/prodecr04.png_.avif";
import Product5 from "../../assets/Images/prodecr05.jpg_400x400q80.jpg_.avif";
import Product6 from "../../assets/Images/prodecr08.png_.avif";

const products = [
    {
        id: 1,
        title: "Vital Tea Zip Lock Pack 900g",
        price: "Rs.1,598",
        oldPrice: "Rs.1,800",
        discount: "-11%",
        image: Product1,
        rating: 4.5,
        reviews: 120,
    },
    {
        id: 2,
        title: "Pampers Baby Diapers Size 5",
        price: "Rs.2,248",
        oldPrice: "Rs.2,650",
        discount: "-15%",
        image: Product2,
        rating: 4.2,
        reviews: 89,
    },
    {
        id: 3,
        title: "Nestle Everyday Milk Powder 850g",
        price: "Rs.1,549",
        oldPrice: "Rs.1,770",
        discount: "-12%",
        image: Product3,
        rating: 4.7,
        reviews: 210,
    },
    {
        id: 4,
        title: "Nestle Cerelac 3 Fruits",
        price: "Rs.375",
        oldPrice: "Rs.450",
        discount: "-17%",
        image: Product4,
        rating: 4.3,
        reviews: 64,
    },
    {
        id: 5,
        title: "Petrella Bubble Gun Toy",
        price: "Rs.414",
        oldPrice: "Rs.999",
        discount: "-59%",
        image: Product5,
        rating: 4.0,
        reviews: 45,
    },
    {
        id: 6,
        title: "Glutathione + Vitamin C Tablets",
        price: "Rs.661",
        oldPrice: "Rs.2,000",
        discount: "-67%",
        image: Product6,
        rating: 4.6,
        reviews: 132,
    },
    {
        id: 7,
        title: "Kids Educational Toy Set",
        price: "Rs.899",
        oldPrice: "Rs.1,299",
        discount: "-31%",
        image: Product5,
        rating: 4.1,
        reviews: 58,
    },
    {
        id: 8,
        title: "Organic Green Tea Pack",
        price: "Rs.999",
        oldPrice: "Rs.1,350",
        discount: "-26%",
        image: Product1,
        rating: 4.8,
        reviews: 190,
    },
    {
        id: 9,
        title: "Baby Feeding Bottle BPA Free",
        price: "Rs.699",
        oldPrice: "Rs.950",
        discount: "-26%",
        image: Product2,
        rating: 4.4,
        reviews: 77,
    },
    {
        id: 10,
        title: "Daily Multivitamin Tablets",
        price: "Rs.1,199",
        oldPrice: "Rs.1,699",
        discount: "-29%",
        image: Product6,
        rating: 4.6,
        reviews: 140,
    },
    {
        id: 11,
        title: "Chocolate Breakfast Cereal",
        price: "Rs.749",
        oldPrice: "Rs.980",
        discount: "-24%",
        image: Product3,
        rating: 4.3,
        reviews: 92,
    },
    {
        id: 12,
        title: "Baby Skin Care Lotion",
        price: "Rs.599",
        oldPrice: "Rs.899",
        discount: "-33%",
        image: Product4,
        rating: 4.5,
        reviews: 110,
    },
];

export default function ProductGrid() {
    return (
        <div className="max-w-7xl mx-auto px-10 py-6 bg-[#f1f4f4]">

            <div className="mb-5">
                <h2 className="text-lg font-semibold text-orange-500">
                    On Sale Now
                </h2>
            </div>

            <div className="
                grid
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-4
                lg:grid-cols-6
                gap-4
            ">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white hover:shadow-lg transition"
                    >
                        <div className="p-2">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 object-contain"
                            />
                        </div>

                        <div className="p-4">
                            <p className="text-xs text-gray-800 line-clamp-2">
                                {item.title}
                            </p>

                            <p className="text-orange-500 font-semibold mt-1 text-sm">
                                {item.price}
                            </p>

                            <div className="flex items-center gap-1 text-[11px] text-gray-500">
                                <span className="line-through">{item.oldPrice}</span>
                                <span>{item.discount}</span>
                            </div>

                            <div className="flex items-center gap-1 mt-1 text-[11px] text-gray-600">
                                <span className="text-yellow-500">⭐ {item.rating}</span>
                                <span>({item.reviews})</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
