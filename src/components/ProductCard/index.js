import { Link } from 'react-router-dom';
import iconShipping from '../../assets/icons/ic_shipping.png';
import styles from './index.module.sass';

export default function ProductCard({
  id,
  title,
  price,
  seller,
  image,
  status,
}) {
  const options2 = { style: 'currency', currency: 'ARS' };
  const numberFormat = new Intl.NumberFormat('es-AR', options2);
  const formatPrice = numberFormat.format(price);
  return (
    <Link to={`/items/${id}`}>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <img src={image} alt="Imagen de producto" />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.price}>
            <span>{formatPrice}</span>
            <img src={iconShipping} alt="shipping" />
          </div>
          <p className={styles.title}>{title}</p>
          <p className={styles.status}>{status}</p>
        </div>
        <div className={styles.sellerContainer}>
          <p className={styles.seller}>{seller}</p>
        </div>
      </div>
    </Link>
  );
}
