import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    console.log("Register clicked"); // 🔥 DEBUG

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      console.log(res.data);
      alert("Registered successfully! Please login");

    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

      <input
        className="border p-2 mb-3 w-full rounded"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border p-2 mb-3 w-full rounded"
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
        className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600"
        onClick={handleRegister} // 🔥 IMPORTANT
      >
        Register
      </button>
    </>
  );
}

export default Register;