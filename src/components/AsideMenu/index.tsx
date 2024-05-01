'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './asideMenu.module.scss';
import { useCart } from '@/contexts/CartContext';
import { useShoppingCart } from '@/contexts/AsideMenuContext';

const MenuAside: React.FC = () => {
  const { cartItems, total, setCartItems } = useCart();
  const { isOpen, toggleCart } = useShoppingCart();

  const handleCloseMenu = () => {
    toggleCart();
  };

  const handleDeleteItem = (idToDelete: number) => {
    const updatedItems = cartItems.filter(item => item.id !== idToDelete);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const handleIncrement = (id: number) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: (item.quantity || 0) + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const handleDecrement = (id: number) => {
    const updatedItems: any = cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = (item.quantity || 0) - 1;
        if (newQuantity <= 0) {
          return null;
        }
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(Boolean);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const handleBuy = () => {
    alert(JSON.stringify(cartItems));
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.menuAside}
          initial={{ right: -480 }}
          animate={{ right: 0 }}
          exit={{ right: -980 }}
          transition={{ duration: 0.1, ease: 'easeInOut' }}
        >
          <div className={styles.overlay} onClick={handleCloseMenu}></div>
          <motion.div
            className={styles.menuContent}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <button className={styles.closeButton} onClick={handleCloseMenu}>
              <img width={32} src="/assets/close.svg" alt="" />
            </button>
            <h2>Carrinho de <br /> compras</h2>
            <ul className={styles.cartList}>
              {cartItems.map(item => (
                <li key={item.id}>
                  <img width={34} src={item.photo} alt="" />
                  <p style={{ maxWidth: 70, minWidth: 70, wordWrap: 'break-word' }}>{item.name}</p>
                  <div>
                    <p style={{ fontSize: 10, marginBottom: 18 }}>Qtd: {item.quantity}</p>
                    <div className={styles.increment}>
                      <button style={{ padding: 5, border: 'none', background: 'white', cursor: 'pointer' }} onClick={() => handleDecrement(item.id)}>-</button>
                      <div className={styles.divider}></div>
                      <p style={{ minWidth: 22, display: 'flex', justifyContent: 'center' }}>{item.quantity}</p>
                      <div className={styles.divider}></div>
                      <button style={{ padding: 5, border: 'none', background: 'white', cursor: 'pointer' }} onClick={() => handleIncrement(item.id)}>+</button>
                    </div>
                  </div>
                  <p style={{ fontWeight: 'bold', minWidth: 80 }}>R$ {item.price}</p>
                  <div style={{ position: 'absolute', top: -10, right: -2 }}>
                    <button style={{ background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => handleDeleteItem(item.id)}>
                      <img width={25} src="/assets/close.svg" alt="" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 25, justifyContent: 'space-between', position: 'absolute', bottom: 120, width: '90%' }}>
              <p className={styles.Firstbtn}>Total:</p>
              <p className={styles.Firstbtn}>R$ {total.toFixed(2)}</p>
            </div>
          </motion.div>
          <button onClick={handleBuy} className={styles.Lastbtn}>Finalizar Compra</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuAside;
