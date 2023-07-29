
import styles from './Buscador.module.scss'
import {CgSearch} from 'react-icons/cg'


interface Props {
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

function Buscador({busca, setBusca}: Props) {
    return ( 
        <div className={styles.buscador}>
            <input type="text"
                value={busca}
                placeholder='Buscar'
                onChange={(e) => setBusca(e.target.value)}
            />
            <CgSearch size={20} color='#4c4d5e'/>
        </div>
     );
}

export default Buscador;