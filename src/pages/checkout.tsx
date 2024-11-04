import { motion } from 'framer-motion';
import { useState } from 'react';
import { useBasket } from '@context/BasketContext';
import { useRouter } from 'next/router';

export default function Checkout() {
  const { basket, clearBasket } = useBasket();
  const [formData, setFormData] = useState({ name: '', email: '', card: '' });
  const router = useRouter();

  // Calculate total price of the basket
  const total = basket.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order Placed! Prepare for the spooky delivery!');
    clearBasket(); // Clear the basket after placing the order
    router.push('/'); // Redirect to home page after order is placed
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-center p-8 bg-background text-text relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-4xl mb-6 font-spooky text-primary">Checkout</h1>
      <p className="mb-8">Complete your order and await the ghostly delivery...</p>

      {basket.length === 0 ? (
        <p className="text-lg">Your basket is empty. Go back to the <a href="/menu" className="text-primary underline">menu</a> to add items.</p>
      ) : (
        <>
          {/* Basket Summary */}
          <div className="bg-black/75 p-6 mb-6 rounded-lg shadow-lg w-full max-w-md border border-primary">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Order Summary</h2>
            <ul className="space-y-2">
              {basket.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-lg font-semibold text-primary">Total: ${total.toFixed(2)}</p>
          </div>

          {/* Checkout Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-black/75 p-8 rounded-lg shadow-lg space-y-4 w-full max-w-md border border-primary"
          >
            <label className="block text-lg">
              <span className="text-primary">Full Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mt-1 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="John Doe"
                required
              />
            </label>

            <label className="block text-lg">
              <span className="text-primary">Email Address</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mt-1 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="haunted@example.com"
                required
              />
            </label>

            <label className="block text-lg">
              <span className="text-primary">Card Details</span>
              <input
                type="text"
                name="card"
                value={formData.card}
                onChange={handleChange}
                className="w-full p-2 mt-1 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="1234 5678 9012 3456"
                required
              />
            </label>

            <button
              type="submit"
              className="w-full py-3 mt-6 text-lg font-semibold text-black bg-primary rounded-md transition-transform duration-300 hover:bg-primary/80 hover:scale-105 focus:ring-4 focus:ring-primary"
            >
              Place Order
            </button>
          </form>
        </>
      )}
    </motion.div>
  );
}
