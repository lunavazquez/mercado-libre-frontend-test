import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo_ML.png';
import iconSerch from '../../assets/icons/ic_Search.png';

import styles from './index.module.sass';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.searchContent}>
        <Link to="/" className={styles.imageContent}>
          <img src={logo} alt="Mercado Libre" />
        </Link>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Nunca dejes de buscar"
          />
          <button className={styles.btnSearch}>
            <img src={iconSerch} alt="" />
          </button>
        </form>
      </div>
    </header>
  );
}
