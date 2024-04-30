import { ProductCard } from '@/components/ProductCard';
import style from './home.module.scss';

export default function Home() {
  return (
    <main>
      <div className={style.container}>
        <ProductCard />
        <ProductCard />
      </div>
      <div style={{ minHeight: '33vh' }}></div>
    </main>
  );
}
