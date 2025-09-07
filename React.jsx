import React, { useState } from "react";
import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import FertilizerPlatform from "./FertilizerPlatform";
const fertilizers = [
  {
    id: 1,
    name: "Multiplex Sulphur Liquid",
    price: "₹309 (MRP ₹485)",
    size: "1 liter",
    use: "Enhances crop quality",
    image: "d1.jpeg",
  },
  {
    id: 2,
    name: "Katyayani NPK 19:19:19",
    price: "₹366 (MRP ₹664)",
    size: "1 kg",
    use: "Water-soluble fertilizer for garden crops",
    image: "d2.jpeg",
  },
  {
    id: 3,
    name: "Anshul liquid magic",
    price: "₹225",
    size: "300 ml",
    use: "Multi-micronutrient blend for plant health",
    image: "liquid_magic.jpeg",
  },
  {
    id: 4,
    name: "Vhume Potassium Humate",
    price: "₹299",
    size: "500 gms",
    use: "Enhances soil structure and fertility",
    image: "pottasium.jpeg",
  },
];

export default function FertilizerPlatform() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const filteredFertilizers = fertilizers.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    alert(`✅ Item added to cart! Total items: ${cartCount + 1}`);
  };

  const handleBuyNow = (productName) => {
    alert(`🛒 You selected "${productName}". Proceeding to checkout...`);
  };

  return (
    <div className="bg-green-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center bg-green-700 text-white p-4">
        <h1 className="text-2xl font-bold cursor-pointer hover:text-yellow-400">AgriNova</h1>
        <div className="flex items-center gap-4">
          <select className="text-black p-1 rounded">
            <option>English</option>
            <option>Telugu</option>
            <option>Hindi</option>
          </select>
          <span className="bg-white text-black px-2 py-1 rounded">🛒({cartCount})</span>
          <span className="bg-white text-black px-2 py-1 rounded">👤</span>
        </div>
      </header>

      {/* Search */}
      <section className="text-center p-6">
        <input
          type="text"
          placeholder="Search for fertilizers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-1/2 border rounded"
        />
        <button className="ml-2 bg-green-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </section>

      {/* Fertilizer Grid */}
      <section className="flex flex-wrap justify-center gap-6 p-6">
        {filteredFertilizers.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-lg shadow-md w-56 text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h4 className="font-bold text-lg">{item.name}</h4>
              <p className="text-sm text-gray-700 mt-2">
                {item.price}
                <br /> Size: {item.size}
                <br /> Use: {item.use}
              </p>
            </div>
            <div className="pb-4">
              <button
                onClick={handleAddToCart}
                className="bg-green-600 text-white px-3 py-1 rounded m-1 animate-pulse"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(item.name)}
                className="bg-orange-500 text-white px-3 py-1 rounded m-1 animate-pulse"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center p-4 mt-auto">
        &copy; 2025 Fertilizer Platform. All rights reserved.
      </footer>

      {/* Info Section */}
      <section className="bg-lime-200 text-center p-6 text-gray-800 text-base">
        This platform allows farmers and sellers to connect seamlessly for
        fertilizer trading. Buyers can compare products, read usage details, and
        place orders directly. The site also offers intelligent fertilizer
        recommendations for better crop yield.
      </section>
    </div>
  );
}
