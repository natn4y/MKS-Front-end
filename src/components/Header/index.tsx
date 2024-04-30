import Link from 'next/link'
import header from './header.module.scss'
import Image from 'next/image'

export function Header() {
  return (
    <nav className={header.container}>
      <Link href={'/'} className={header.logo_container}>
        <p>MKS</p>
        <p>Sistemas</p>
      </Link>
      <div className={header.cart_container}>
        <div>
          <img width={19} height={19} src={'/assets/cartIcon.svg'} alt='logo' />
        </div>
        <p>0</p>
      </div>
    </nav>
  )
}
