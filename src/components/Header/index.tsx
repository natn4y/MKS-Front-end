'use client'
import Link from 'next/link'
import header from './header.module.scss'
import { useCart } from '@/contexts/CartContext';
import { useShoppingCart } from '@/contexts/AsideMenuContext';

export function Header() {
  const { total, } = useCart();
  const { toggleCart } = useShoppingCart();

  return (
    <nav className={header.container}>
      <Link href={'/'} className={header.logo_container}>
        <p>MKS</p>
        <p>Sistemas</p>
      </Link>
      <div onClick={toggleCart} className={header.cart_container}>
        <div>
          <img width={19} height={19} src={'/assets/cartIcon.svg'} alt='logo' />
        </div>
        <p>{total.toFixed(2)}</p>
      </div>
    </nav>
  )
}
