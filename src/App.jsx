import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Rodape from './components/Rodape/Rodape';
import './App.css';
import Contato from './pages/Contato';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contato' element={<Contato/>}/>
          <Route path='/cadastro' element={<Cadastro />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  )
}

export default App
