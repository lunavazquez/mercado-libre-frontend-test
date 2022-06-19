import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import descriptionServicio from '../../common/description-service';
import detailService from '../../common/detail-service';
import styles from './index.module.sass';

export default function ProductDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [description, setDescription] = useState({});

  useEffect(() => {
    detailService({ itemId: id }).then(setItem);
  }, [id]);

  useEffect(() => {
    descriptionServicio({ itemId: id }).then(setDescription);
  }, [id]);

  if (!item) {
    return <div>Cargando...</div>;
  }

  const options2 = { style: 'currency', currency: 'ARS' };
  const numberFormat = new Intl.NumberFormat('es-AR', options2);
  const formatPrice = numberFormat.format(item.price);

  return (
    <div className="view">
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <img src={item.pictures[0].url} alt="Imagen del producto" />
        </div>
        <div className={styles.txtContainer}>
          <p className={styles.status}>
            {
              item.attributes.find(
                attribute => attribute.id === 'ITEM_CONDITION'
              ).value_name
            }{' '}
            - {item.sold_quantity} vendidos
          </p>
          <p className={styles.title}>{item.title}</p>
          <p className={styles.price}>{formatPrice}</p>
          <button className={styles.btnBuy}>Comprar</button>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.descriptionTitle}>Detalle del producto</p>
        <p className={styles.descriptionText}>{description.plain_text}</p>
      </div>
    </div>
  );
}
