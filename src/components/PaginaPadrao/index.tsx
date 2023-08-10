import { Outlet } from 'react-router-dom';
import styles from './Pagina.module.scss';
import stylesTema from 'styles/Tema.module.scss';

function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa da massa</div>
      </header>

      <div className={stylesTema.container}> 
        <Outlet />
      </div>
    </>
  );
}

export default PaginaPadrao;
