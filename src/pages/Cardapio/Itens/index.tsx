import { useEffect, useState } from 'react';
import styles from './Intens.module.scss';
import Item from './Item';
import cardapio from  'data/cardapio.json';

interface Props {
    busca: string;
    ordenador: string;
    filtro: number | null
}

function Itens({busca, filtro, ordenador} : Props) {
  const [lista, setLista] = useState(cardapio);

  function testeBusca(title: string){
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testeFiltro(id: number ){
    if(filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: typeof cardapio){
    switch(ordenador){
    case 'porcao':
      return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
    case 'qtd_pessoas':
      return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1);
    case 'preco':
      return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);
    default:
      return novaLista;
    }
  }

  useEffect(() => {
    const novaLista = cardapio.filter(item => testeBusca(item.title) && testeFiltro(item.category.id));
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);


  return ( 
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id}  {...item} />
      ))}      

    </div>
  );
}

export default Itens;