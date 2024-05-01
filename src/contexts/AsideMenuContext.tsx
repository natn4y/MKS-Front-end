'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ShoppingCartContextType {
  isOpen: boolean;
  toggleCart: () => void;
  setIsOpen: any;
}

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

export const ShoppingCartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ShoppingCartContext.Provider value={{ isOpen, toggleCart, setIsOpen }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};
