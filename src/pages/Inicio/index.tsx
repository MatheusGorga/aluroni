import cardapio from 'data/cardapio.json';
import styles from './inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);

  const  navigate =  useNavigate();

  function redirecionarParaDetalhes(prato: Prato){
    navigate(`/prato/${prato.id}`, {state: {prato}});
  }

  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
              <button
                onClick={() => redirecionarParaDetalhes(item)}
                className={styles.recomendado__botao}>
                ver mais 
              </button>
            </div>
          </div>
        ))}
      </div> 
      <h3 className={stylesTema.titulo}>
        Nossa casa
      </h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="casa aluroni" />
        <div className={styles.nossaCasa__endereco}>
              Rua Teste NH <br /><br /> Alura - Sp
        </div>
      </div>
    </section>
  );
}

export default Inicio;
