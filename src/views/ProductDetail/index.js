import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import detailService from '../../common/detail-service';
import styles from './index.module.sass';

export default function ProductDetail() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  console.log(item);
  useEffect(() => {
    detailService({ itemId: id }).then(setItem);
  }, [id]);
  return (
    <div className="view">
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <img
            src="http://http2.mlstatic.com/D_743195-MLA45719932493_042021-O.jpg"
            alt="Imagen del producto"
          />
        </div>
        <div className={styles.txtContainer}>
          <p className={styles.status}>Nuevo</p>
          <p className={styles.title}>title</p>
          <p className={styles.price}>$ 2000</p>
          <button className={styles.btnBuy}>Comprar</button>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.descriptionTitle}>Detalle del producto</p>
        <p className={styles.descriptionText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
          possimus praesentium dignissimos voluptatem quam esse debitis placeat
          vel ipsum sed itaque dolorum quis voluptatibus alias minus eius, quo
          recusandae incidunt.
        </p>
      </div>
    </div>
  );
}
