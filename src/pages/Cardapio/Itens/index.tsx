import { useEffect, useState } from 'react';
import styles from './Intens.module.scss'
import Item from './Item';
import itens from './itens.json'

interface Props {
    busca: string;
    ordenador: string;
    filtro: number | null
}

function Itens({busca, filtro, ordenador} : Props) {
    const [lista, setLista] = useState(itens)

    function testeBusca(title: string){
        const regex = new RegExp(busca, 'i');
        return regex.test(title)
    }

    function testeFiltro(id: number ){
        if(filtro !== null) return filtro === id;
        return true;
    }

    useEffect(() => {
        const novaLista = itens.filter(item => testeBusca(item.title) && testeFiltro(item.category.id))
        setLista(novaLista)
    }, [busca, filtro])


    return ( 
        <div className={styles.itens}>
            {lista.map((item) => (
                <Item key={item.id}  {...item} />
            ))}      

        </div>
     );
}

export default Itens;