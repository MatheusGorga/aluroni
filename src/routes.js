import AppBar from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styles from './Routes.module.scss';
import PaginaPadrao from 'components/PaginaPadrao';

function AppRouter() {
  return (
    <main>
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio/>}/>
            <Route path="cardapio" element={<Cardapio />} />
          </Route>
          
        </Routes>
      </Router>
    </main>
  );
}

export default AppRouter;
