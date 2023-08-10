import { Outlet } from 'react-router-dom';
import styles from './Pagina.module.scss';

function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa da massa</div>
      </header>

      <Outlet />
    </>
  );
}

export default PaginaPadrao;
