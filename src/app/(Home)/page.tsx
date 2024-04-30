import { ProductCard } from '@/components/productCard'
import style from './home.module.scss'

export default function Home() {
  return (
    <main className={style.container}>
      <ProductCard />
    </main>
  )
}
