import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function AppRouter() {
  return ( 
    <Router>
      <Routes>
        <Route path='/'  element={<Inicio/>}/>
        <Route path='/cardapio'  element={<Cardapio/>}/>
      </Routes>
    </Router>
  );
}

export default AppRouter;