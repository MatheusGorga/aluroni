import styles from './Prato.module.scss';
import {  Route, Routes, useNavigate, useParams } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPratos from 'components/Tags';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';


function Prato() {

  const navigate = useNavigate();
  const { id } = useParams();
  const prato = cardapio.find((item) => item.id === Number(id));
  if(!prato) {
    return <NotFound/>;
  }

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <>
              <button onClick={() => navigate(-1)} className={styles.voltar}>
                {'< Voltar'}
              </button>
              <section className={styles.container}>
                <h1 className={styles.titulo}>{prato.title}</h1>
                <div className={styles.imagem}>
                  <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo}>
                  <p className={styles.titulo__descricao}>
                    {prato.description}
                  </p>
                  <TagsPratos {...prato} />
                </div>
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default Prato;
