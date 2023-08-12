import AppBar from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PaginaPadrao from 'components/PaginaPadrao';
import Sobre from 'pages/Sobre';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import './index.css';

function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio/>}/>
            <Route path="cardapio" element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} /> 
          </Route>   
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}

export default AppRouter;
