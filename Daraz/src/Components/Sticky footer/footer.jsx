import React from "react";
import appStore from "../../assets/Images/app1.png";
import playStore from "../../assets/Images/app2.png";
import appGallery from "../../assets/Images/app3.png";

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#f1f4f4] ">
                <div className="max-w-7xl mx-auto px-7 py-10">

                    {/* GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Customer Care */}
                        <div>
                            <h3 className="font-semibold text-lg mb-3 text-blue-800">Customer Care</h3>
                            <ul className="space-y-0 text-sm text-blue-800">
                                <li>Help Center</li>
                                <li>How to Buy</li>
                                <li>Corporate & Bulk Purchasing</li>
                                <li>Returns & Refunds</li>
                                <li>Daraz Shop</li>
                                <li>Contact Us</li>
                                <li>Purchase Protection</li>
                                <li>Daraz Pick up Points</li>
                            </ul>
                        </div>

                        {/* Daraz */}
                        <div>
                            <h3 className="font-semibold text-lg mb-3 text-blue-800">Daraz</h3>
                            <ul className="space-y-0 text-sm text-blue-800">
                                <li>About Us</li>
                                <li>Digital Payments</li>
                                <li>Daraz Donates</li>
                                <li>Daraz Blog</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Online Shopping App</li>
                                <li>Sell on Daraz</li>
                            </ul>
                        </div>

                        {/* App Info */}
                        <div>
                            <h3 className="font-semibold text-lg mb-3 text-blue-800">Happy Shopping</h3>
                            <p className="text-sm text-blue-800 mb-4">
                                Download App
                            </p>
                            <div className="flex gap-3 flex-wrap">
                                <img src={appStore} alt="App Store" className="h-10" />
                                <img src={playStore} alt="Google Play" className="h-10" />
                                <img src={appGallery} alt="App Gallery" className="h-10" />
                            </div>
                        </div>

                        {/* Empty / spacing column (like Daraz) */}
                        <div className="hidden lg:block"></div>
                    </div>

                </div>
            </footer>
            <section className="max-w-7xl mx-auto px-4 py-12 text-gray-500 bg-[#f1f4f4]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* BOX 1 */}
                    <div className=" p-5 text-sm leading-relaxed">
                        <h3 className="font-semibold text-lg mb-3">
                            How Daraz Transformed Online Shopping
                        </h3>
                        <p>
                            Daraz entered Pakistan’s e-commerce market in 2012 and has grown into
                            the country’s largest online marketplace. Operating across Pakistan,
                            Bangladesh, Sri Lanka, Myanmar, and Nepal, Daraz aims to provide a
                            safe and efficient platform for buyers and sellers.
                            <br /><br />
                            What started as a fashion store has now become a one-stop solution
                            offering millions of products with smooth navigation, personalized
                            recommendations, and a reliable shopping experience via web and app.
                        </p>
                    </div>

                    {/* BOX 2 */}
                    <div className="p-5 text-sm leading-relaxed">
                        <h3 className="font-semibold text-lg mb-3">
                            What Makes Daraz Different
                        </h3>
                        <ul className=" ml-4 space-y-2 list-none">
                            <li>Over 15 million products across all categories</li>
                            <li>Hassle-free delivery with order tracking</li>
                            <li>7-day easy return & exchange policy</li>
                            <li>Cash on Delivery, Cards, EMI options</li>
                            <li>easypaisa & JazzCash payments</li>
                            <li>Daraz Wallet exclusive discounts</li>
                            <li>Verified sellers & Daraz Mall brands</li>
                        </ul>
                    </div>

                    {/* BOX 3 */}
                    <div className=" p-5 text-sm leading-relaxed">
                        <h3 className="font-semibold text-lg mb-3">
                            Global & Social Impact
                        </h3>
                        <p>
                            Daraz Global Collection allows customers to shop internationally
                            while staying local. From unique gadgets to global brands, Daraz
                            brings the world to Pakistan.
                            <br /><br />
                            Through Daraz Care, customers can support charities related to
                            education, healthcare, environment, and shelters. Daraz Corporate
                            also simplifies bulk purchasing for businesses.
                        </p>
                    </div>

                    {/* BOX 4 */}
                    <div className=" p-5 text-sm leading-relaxed">
                        <h3 className="font-semibold text-lg mb-3">
                            Top Categories & Brands
                        </h3>
                        <ul className="list-none ml-4 space-y-1">
                            <li>Mobile Phones & Accessories</li>
                            <li>Laptops & Computers</li>
                            <li>LED TVs & Home Appliances</li>
                            <li>Health & Beauty</li>
                            <li>Men’s & Women’s Fashion</li>
                            <li>Online Grocery & Books</li>
                            <li>Air Conditioners</li>
                            <li>Trending Phones & Gadgets</li>
                            <li>Shop Worldwide (Lazada, Miravia)</li>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Footer;


