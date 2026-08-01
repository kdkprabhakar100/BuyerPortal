import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function Auth({ setIsLoggedIn }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 mt-10 w-[90%] max-w-md transition-all">

      <div className="flex mb-6 overflow-hidden rounded-lg border">
        
        <button
          className={`w-1/2 py-2 font-semibold transition ${
            isLogin
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>

        <button
          className={`w-1/2 py-2 font-semibold transition ${
            !isLogin
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>

      <div>
        {isLogin ? (
          <Login setIsLoggedIn={setIsLoggedIn} />
        ) : (
          
          <Register switchToLogin={() => setIsLogin(true)} />
        )}
      </div>

    </div>
  );
}

export default Auth;