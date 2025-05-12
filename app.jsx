import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { ShoppingCart, Search } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$89.99",
    image:
      "https://images.unsplash.com/photo-1580894894512-faa9c04f1754?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Smartwatch",
    price: "$129.99",
    image:
      "https://images.unsplash.com/photo-1580906855285-931b9aa6be7b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Laptop",
    price: "$999.99",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
  },
];

export default function OrionStore() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Orion</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 rounded border border-gray-300 w-64"
          />
          <Button variant="default">
            <Search className="w-4 h-4" />
          </Button>
        </div>
        <Button variant="outline">
          <ShoppingCart className="w-5 h-5 mr-2" /> Cart
        </Button>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.price}</p>
              <Button className="w-full">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
