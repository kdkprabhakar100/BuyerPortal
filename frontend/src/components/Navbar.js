import React from "react";

function Navbar({ setIsLoggedIn }) {
  return (
      <div className="w-full bg-white shadow-md px-4 sm:px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-lg sm:text-xl font-bold text-blue-600">
        Buyer Portal
      </h1>

      <button
          className="bg-red-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-red-600"        onClick={() => {
          localStorage.removeItem("token");
          setIsLoggedIn(false);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;