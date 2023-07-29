import styles from './Intens.module.scss'
import Item from './Item';
import itens from './itens.json'


function Itens() {
    return ( 
        <div className={styles.itens}>
            {itens.map((item) => (
                <Item key={item.id}  {...item} />
            ))}      

        </div>
     );
}

export default Itens;