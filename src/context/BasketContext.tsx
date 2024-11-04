// src/context/BasketContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BasketItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface BasketContextType {
  basket: BasketItem[];
  addToBasket: (item: BasketItem) => void;
  removeFromBasket: (itemId: number) => void;
  clearBasket: () => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const addToBasket = (item: BasketItem) => {
    setBasket((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromBasket = (itemId: number) => {
    setBasket((prev) =>
      prev.filter((item) => item.id !== itemId)
    );
  };

  const clearBasket = () => setBasket([]);

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
