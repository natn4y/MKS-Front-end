import { useState } from 'react';
import styles from './productCard.module.scss';
import { useCart } from '@/contexts/CartContext';
import toast from 'react-hot-toast';

interface ProductProps {
  product: {
    id: number;
    name: string;
    description: string;
    photo: string;
    price: number;
  };
}

export function ProductCard({ product }: ProductProps) {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      photo: product.photo,
      price: product.price,
    });
    setIsAdded(true);
    toast.success("Produto adicionado ao carrinho!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_wrap}>
        <div>
          <div className={styles.image_container}>
            <img width={100} src={product.photo} alt="" />
          </div>
          <div className={styles.wrap_price}>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.price}>R$ {product.price}</p>
          </div>
          <p className={styles.subtitle}>{product.description}</p>
        </div>
      </div>
      <button className={styles.buy_btn} onClick={handleAddToCart}>
        <img src="/assets/cart.svg" alt="" />
        <p>COMPRAR</p>
      </button>
    </div>
  );
}
