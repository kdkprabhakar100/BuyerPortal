import React from "react";
function Navbar({ setIsLoggedIn }) {
      const logout = () => {
        localStorage.removeItem("token");

        if (typeof setIsLoggedIn === "function") {
          setIsLoggedIn(false);
        } else {
          console.error("setIsLoggedIn is not passed properly");
        }
      };

  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-3">
      <h1 className="text-xl font-bold text-blue-600">Buyer Portal</h1>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;