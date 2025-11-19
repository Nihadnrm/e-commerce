import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();
  const nav = useNavigate();

  return (
    <nav className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-gray-800">
            Shop<span className="text-blue-600">Ease</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/"><li className="hover:text-blue-600 cursor-pointer">Home</li></Link>
          <Link to="/allproducts"><li className="hover:text-blue-600 cursor-pointer">Products</li></Link>
          <Link to="/contact"><li className="hover:text-blue-600 cursor-pointer">Contact</li></Link>

          {user && (
            <Link to="/MyOrders">
              <li className="hover:text-blue-600 cursor-pointer">My Orders</li>
            </Link>
          )}
        </ul>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-6">

          {/* Show User Profile (Clerk) */}
          {user ? (
            <UserButton/>
          ) : (
            <button onClick={openSignIn} className="hover:text-blue-600">
              Login
            </button>
          )}

          {/* Cart */}
          <div className="relative cursor-pointer">
            <Link to="/cart">
              <span className="text-xl">🛒</span>
            </Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 flex flex-col gap-4 text-gray-700">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            <p className="hover:text-blue-600">Home</p>
          </Link>

          <Link to="/allproducts" onClick={() => setMenuOpen(false)}>
            <p className="hover:text-blue-600">Products</p>
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <p className="hover:text-blue-600">Contact</p>
          </Link>

          <Link to="/cart" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <span>🛒</span> Cart
          </Link>

          {/* MOBILE — My Orders */}
          {user && (
            <p
              onClick={() => { setMenuOpen(false); nav("/MyOrders"); }}
              className="hover:text-blue-600 cursor-pointer"
            >
              My Orders
            </p>
          )}

          {/* MOBILE — User Profile */}
          {user && (
            <div className="border p-2 rounded-lg w-fit">
              <UserButton />
            </div>
          )}

          {/* MOBILE — Login */}
          {!user && (
            <button
              onClick={() => { setMenuOpen(false); openSignIn(); }}
              className="hover:text-blue-600"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
