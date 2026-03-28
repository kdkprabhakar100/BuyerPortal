import React, { useState } from "react";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-200">

      <Toaster position="top-right" />

      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}

      <div className="flex flex-col items-center px-4">

        {!isLoggedIn ? (
          <>
            <h1 className="text-2xl sm:text-4xl font-bold text-blue-600 mt-8 text-center">
              Buyer Portal
            </h1>


            <Auth setIsLoggedIn={setIsLoggedIn} />
          </>
        ) : (
          <Dashboard />
        )}

      </div>
    </div>
  );
}

export default App;