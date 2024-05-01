'use client'
import { useEffect, useState } from 'react';
import style from './home.module.scss';
import { ProductCard } from '@/components/ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
  description: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main>
      <div className={style.container}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
