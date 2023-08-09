import AppBar from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styles from './Routes.module.scss';

function AppRouter() {
  return (
    <main>
      <Router>
        <AppBar />
        <header className={styles.header}>
          <div className={styles.header__text}>A casa da massa</div>
        </header>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cardapio" element={<Cardapio />} />
        </Routes>
      </Router>
    </main>
  );
}

export default AppRouter;
