'use client'
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  photo: string;
  description: string;
  quantity?: number;
}

interface CartContextType {
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
  total: number;
  addToCart: (item: CartItem) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(prevItems => {
        const updatedItems = prevItems.map(cartItem => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: (cartItem.quantity || 0) + 1 };
          }
          return cartItem;
        });
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        return updatedItems;
      });
    } else {
      const updatedItems = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updatedItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    }
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 0), 0);

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const contextValue: CartContextType = {
    cartItems,
    setCartItems,
    total,
    addToCart,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
