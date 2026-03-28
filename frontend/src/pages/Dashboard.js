import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa";

function Dashboard() {
  const [favourites, setFavourites] = useState([]);
  const [newFav, setNewFav] = useState("");
  const token = localStorage.getItem("token");

  const fetchFavourites = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/favourites",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFavourites(res.data.favourites);
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  const addFavourite = async () => {
    if (!newFav.trim()) {
      alert("Enter something first");
      return;
    }

    if (favourites.includes(newFav)) {
      alert("Already added");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/favourites/add",
        { propertyId: newFav },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setNewFav("");
      fetchFavourites();
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  const removeFavourite = async (id) => {
    try {
      await axios.post(
        "http://localhost:5000/api/favourites/remove",
        { propertyId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchFavourites();
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  useEffect(() => {
    fetchFavourites();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-[90%] max-w-2xl bg-white p-4 sm:p-6 rounded-xl shadow mt-6 sm:mt-10">
      
      <h2 className="text-xl sm:text-2xl font-bold mb-4">
        Dashboard
      </h2>

      <input
        className="border p-2 mb-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter property name"
        value={newFav}
        onChange={(e) => setNewFav(e.target.value)}
      />

      <button
        className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 mb-4 hover:bg-green-600 transition"
        onClick={addFavourite}
      >
        <FaHeart />
        Add Favourite
      </button>

      <ul className="space-y-3">
        {favourites.length === 0 ? (
          <div className="text-center py-6 text-gray-500">
            <p className="text-lg">No favourites yet</p>
            <p className="text-sm">Click "Add Favourite" to start</p>
          </div>
        ) : (
          favourites.map((fav, i) => (
            <li
              key={i}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-100 p-4 rounded-lg shadow-sm gap-2"
            >
              <span className="font-medium">{fav}</span>

              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition w-full sm:w-auto"
                onClick={() => removeFavourite(fav)}
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Dashboard;