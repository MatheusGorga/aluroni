import { Prato } from 'types/Prato';
import styles from './Tags.module.scss';

function TagsPratos({ category, size, serving, price }: Prato) {
  return (
    <div className={styles.tags}>
      <div
        className={`${styles.tags__tipo} ${
          styles[`tags__tipo__${category.label.toLowerCase()}`]
        } `}
      >
        {category.label}
      </div>
      <div className={styles.tags__porcao}>{size}</div>
      <div className={styles.tags__qtdpessoas}>
        Serve {serving} pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
}

export default TagsPratos;