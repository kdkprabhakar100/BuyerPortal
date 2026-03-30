import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register({ switchToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

      const handleRegister = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/register`,
          { name, email, password }
        );

        if (res.status === 201) {
          alert("Registered successfully!");
          switchToLogin();  
        }

      } catch (err) {
        console.log("ERROR:", err.response?.data);

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
        onClick={handleRegister}
      >
        Register
      </button>
    </>
  );
}

export default Register;