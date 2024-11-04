import { useBasket } from '@context/BasketContext';

const menuItems = [
  { id: 1, name: 'Ghostly Garlic Bread', description: 'Bread infused with garlic and a hint of ghost!', price: 5.99 },
  { id: 2, name: 'Zombie Pasta', description: 'Pasta so good, it’ll bring you back to life!', price: 12.99 },
  { id: 3, name: 'Vampire Wine', description: 'Aged to perfection, with a taste of the night.', price: 8.99 },
];

export default function Menu() {
  const { addToBasket } = useBasket();

  return (
    <div className="min-h-screen bg-background text-text p-8">
      <h1 className="text-3xl text-center mb-8">Our Spooky Menu</h1>
      <div className="space-y-6">
        {menuItems.map((item) => (
          <div key={item.id} className="p-4 border border-text rounded-lg">
            <h2 className="text-2xl text-primary">{item.name}</h2>
            <p>{item.description}</p>
            <p className="text-primary font-semibold">${item.price.toFixed(2)}</p>
            <button
              onClick={() => addToBasket(item)}
              className="mt-2 p-2 bg-primary text-black rounded hover:bg-primary/80"
            >
              Add to Basket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
