
import './App.css'
import Banner from './components/Banner/Banner'
import Cabecalho from './components/Cabecalho/Cabecalho'
import Galeria from './components/Galeria/Galeria'
import Planos from './components/Planos/Planos'
import Rodape from './components/Rodape/Rodape'

function App() {

  return (
    <>
      <Cabecalho />
      <Banner />
      <Galeria />
      <section className='planos'>
        <Planos nome="Mensal" valor={60} desconto={0} />
        <Planos nome="Anual" valor={299} desconto={10} />
      </section>
      <Rodape />
    </>
  )
}

export default App
