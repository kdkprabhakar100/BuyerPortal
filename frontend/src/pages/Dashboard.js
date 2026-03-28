import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [favourites, setFavourites] = useState([]);
  const token = localStorage.getItem("token");

  const fetchFavourites = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/favourites",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setFavourites(res.data.favourites);
  };

  const addFavourite = async () => {
    await axios.post(
      "http://localhost:5000/api/favourites/add",
      { propertyId: "house123" },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchFavourites();
  };

  useEffect(() => {
    fetchFavourites();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={addFavourite}>Add Favourite</button>

      <ul>
        {favourites.map((fav, i) => (
          <li key={i}>{fav}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;