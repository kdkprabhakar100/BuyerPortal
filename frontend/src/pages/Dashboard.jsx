import React, { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import PropertyCard from "../components/PropertyCard";

function Dashboard() {
  const [properties, setProperties] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProperties = async () => {
    setLoading(true);

    setTimeout(() => {
      setProperties([
        {
          _id: "1",
          title: "Luxury Villa",
          price: 1200,
          image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
        },
        {
          _id: "2",
          title: "Modern Apartment",
          price: 800,
          image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
        },
        {
          _id: "3",
          title: "Beach House",
          price: 1500,
          image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        },
        {
          _id: "4",
          title: "City Penthouse",
          price: 2000,
          image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        },
        {
          _id: "5",
          title: "Cozy Cottage",
          price: 600,
          image: "https://images.unsplash.com/photo-1449844908441-8829872d2607",
        },
        {
          _id: "6",
          title: "Mountain Cabin",
          price: 900,
          image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
        },
        {
          _id: "7",
          title: "Luxury Condo",
          price: 1100,
          image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
        },
        {
          _id: "8",
          title: "Modern Studio",
          price: 500,
          image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
        },
        {
          _id: "9",
          title: "Suburban House",
          price: 700,
          image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
        },
        {
          _id: "10",
          title: "Luxury Mansion",
          price: 3000,
          image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        },
      ]);

      setLoading(false);
    }, 500);
  };

  const fetchFavourites = async () => {
    try {
      const res = await API.get("/favourites");
      setFavourites(res.data.favourites || []);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleFav = async (id) => {
    try {
      if (favourites.includes(id)) {
        const res = await API.post("/favourites/remove", {
          propertyId: id,
        });
        setFavourites(res.data.favourites);
      } else {
        const res = await API.post("/favourites/add", {
          propertyId: id,
        });
        setFavourites(res.data.favourites);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProperties();
    fetchFavourites();
  }, []);

return (
  <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 w-full overflow-hidden">

    <Sidebar />

    <div className="flex-1 w-full">
      <div className="p-4 sm:p-6 space-y-8 max-w-7xl mx-auto w-full overflow-hidden">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card title="Total Properties" value={properties.length} />
          <Card title="Favourites" value={favourites.length} />
          <Card title="Users" value="10" />
        </div>


        <div>
          <h2 className="text-xl font-bold mb-3">Favourites ❤️</h2>

          {favourites.length === 0 ? (
            <p className="text-gray-500">No favourites yet</p>
          ) : (
            <div className="flex gap-4 overflow-x-auto pb-3 scroll-smooth">
              {properties
                .filter((p) => favourites.includes(p._id))
                .map((p) => (
                  <div key={p._id} className="min-w-[260px] max-w-[260px]">
                    <PropertyCard
                      property={p}
                      isFav={true}
                      toggleFav={toggleFav}
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
      
        <div>
          <h2 className="text-xl font-bold mb-4">All Properties</h2>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {properties.map((p) => (
                <PropertyCard
                  key={p._id}
                  property={p}
                  isFav={favourites.includes(p._id)}
                  toggleFav={toggleFav}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  </div>
);
}

export default Dashboard;