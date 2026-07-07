import React, { useState } from "react";
import axios from "axios";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

const handleLogin = async () => {
  setLoading(true);
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);
    setIsLoggedIn(true);
  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
    
  }
  setLoading(false);
  
};

  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
      <input
        className="border p-2 mb-3 w-full rounded"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2 mb-3 w-full rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
  className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition"
  onClick={handleLogin}
  disabled={loading}
>
  {loading ? "Logging in..." : "Login"}
</button>
    </>
  );
}

export default Login;