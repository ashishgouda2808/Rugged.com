
import React from "react";
import { Button } from "@/components/ui/button";

export default function Rugged() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503342217505-b0a15ec3261c)' }}>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">RUGGED</h1>
        <p className="text-xl md:text-2xl mb-6 max-w-xl">Built for the bold. Clothing that endures the elements and defines your style.</p>
        <Button className="bg-white text-black font-bold hover:bg-gray-200">Shop Now</Button>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Gear</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {[1,2,3].map((id) => (
            <div key={id} className="bg-neutral-800 p-4 rounded-2xl shadow-md">
              <img src={`https://source.unsplash.com/random/400x400?clothing,${id}`} alt="Product" className="w-full h-64 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rugged Jacket #{id}</h3>
              <p className="text-sm text-neutral-400 mb-4">Tough, warm, and built to last. Made for adventure.</p>
              <Button className="bg-white text-black font-bold hover:bg-gray-200 w-full">View Product</Button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-neutral-800 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="max-w-3xl mx-auto text-neutral-300">Rugged was born from a desire to merge durability with design. Our mission is to provide clothing that not only withstands the toughest conditions, but also looks good doing it. Whether you're in the city or the wilderness, Rugged is with you.</p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-neutral-300 mb-4">Have questions, or just want to say hey? Reach out anytime.</p>
        <Button className="bg-white text-black font-bold hover:bg-gray-200">Contact Us</Button>
      </section>
    </main>
  );
}
