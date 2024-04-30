import styles from './productCard.module.scss'

export function ProductCard() {
  return (
    <div className={styles.container}>
      <div className={styles.container_wrap}>
        <div>
          <div className={styles.image_container}>
            <img width={100} src="/assets/product_1.png" alt="" />
          </div>
          <div className={styles.wrap_price}>
            <h1 className={styles.title}>Apple Watch Series 4 GPS</h1>
            <div className={styles.price}>R$ 399</div>
          </div>
          <p className={styles.subtitle}>
            Redesigned from scratch and completely revised.
          </p>
        </div>
      </div>
      <button className={styles.buy_btn}>
        COMPRAR
      </button>
    </div>
  )
}