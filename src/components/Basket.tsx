import { useBasket } from '@context/BasketContext';
import { useRouter } from 'next/router';

export default function Basket() {
  const { basket, removeFromBasket } = useBasket();
  const router = useRouter();

  const total = basket.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-black/75 text-text rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-2">Your Basket</h2>
      {basket.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        <ul>
          {basket.map((item) => (
            <li key={item.id} className="mb-1">
              {item.name} x {item.quantity} - ${item.price.toFixed(2)}
              <button
                onClick={() => removeFromBasket(item.id)}
                className="text-red-500 ml-2"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-2 font-semibold">Total: ${total.toFixed(2)}</p>
      <button
        onClick={() => router.push('/checkout')}
        className="w-full mt-3 p-2 bg-primary text-black rounded hover:bg-primary/80"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
