import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-300 pt-12 pb-6 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 shadow">

        {/* brand section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Shop<span className="text-blue-500">Ease</span>
          </h2>
          <p className="text-gray-400">
            Your trusted online marketplace for electronics, fashion, home essentials
            and more.
          </p>

          {/* Social Icons */}
          <div className="flex mt-4 gap-4">
            <a href="#" className="hover:text-white text-xl"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="hover:text-white text-xl"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="#" className="hover:text-white text-xl"><i className="fa-solid fa-phone"></i></a>
          </div>
        </div>

        {/* links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/allproducts" className="hover:text-white">Shop</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
            <li><Link to="/orders" className="hover:text-white">My Orders</Link></li>
          </ul>
        </div>

        {/* links*/}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Shipping Info</li>
            <li className="hover:text-white cursor-pointer">Return Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-gray-400 mb-3">
            Subscribe to get updates on offers and best deals.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold duration-200">
            Subscribe
          </button>
        </div>

      </div>

      {/* copyright */}
      <div className="text-center text-gray-500 border-t border-gray-700 mt-10 pt-5">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
