import { Prato } from 'types/Prato';
import styles from './Item.module.scss'; 
import TagsPratos from 'components/Tags';
import { useNavigate } from 'react-router-dom';



export default function Item(props: Prato) {

  const navigate = useNavigate();

  const { description ,photo, title} = props;
  return (
    <div className={styles.item}  onClick={() => navigate(`/prato/${props.id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <TagsPratos {...props }/>
      </div>
    </div>
  );
}