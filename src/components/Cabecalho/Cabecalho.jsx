import './Cabecalho.css';

function Cabecalho() {
    return (
        <>
            <header className="navbar">
                <section className='container-cabecalho'>
                    <img src="/popcorn.png" alt="icon-pipoca" />
                    <h1 className='titulo-cabecalho'>CODE+</h1>
                </section>
                <nav className="nav-links">
                    <a href="#"> Home </a>
                    <a href="#"> Sobre </a>
                    <a href="#"> Ajuda</a>
                    <a href="#" onClick={() => {
                        alert('Você clicou em Entrar!');
                    }}>Entrar</a>
                </nav>
            </header>
        </>
    );
}

export default Cabecalho;