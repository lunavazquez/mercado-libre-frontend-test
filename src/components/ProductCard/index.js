import iconShipping from '../../assets/icons/ic_shipping.png';
import styles from './index.module.sass';

export default function ProductCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img
          src="https://http2.mlstatic.com/D_743195-MLA45719932493_042021-O.jpg"
          alt=""
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.price}>
          <span>$ 1000</span>
          <img src={iconShipping} alt="shipping" />
        </div>
        <p className={styles.title}>Apple iPhone 12 (128 Gb) - Negro</p>
        <p className={styles.status}>Completo Unico!</p>
      </div>
      <div className={styles.sellerContainer}>
        <p className={styles.seller}>Capital Federal</p>
      </div>
    </div>
  );
}
