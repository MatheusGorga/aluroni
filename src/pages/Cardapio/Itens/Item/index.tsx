import styles from './Item.module.scss'; 

interface IItem {
    title: string
    description: string
    photo: string
    size: number
    serving: number
    price: number
    id: number
    category: Category
  }
  
export interface Category {
    id: number
    label: string
  }



export default function Item(props: IItem) {
  const {category, description ,photo, price, serving, size, title} = props;
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <div className={styles.item__tags}>
          <div className={`${styles.item__tipo} ${styles[`item__tipo__${category.label.toLowerCase()}`]} `}>{category.label}</div>
          <div className={styles.item__porcao}>{size}</div>
          <div className={styles.item__qtdpessoas}>Serve {serving} pessoa{serving=== 1? '' : 's' }</div>
          <div className={styles.item__valor}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}