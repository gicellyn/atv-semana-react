import { Container, Navbar, Nav } from 'react-bootstrap';
import './Cabecalho.css';
import { Link } from 'react-router-dom';

function Cabecalho() {
    return (
        <header>
            <Navbar variant='dark' expand="md" className="navbar">
                <Container fluid>
                    <section className='container-cabecalho'>
                        <Link ><img src="/popcorn.png" alt="icon-pipoca" width={50} /></Link>
                        <h1 className='titulo-cabecalho'>CODE+</h1>
                    </section>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="nav-links ms-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/cadastro">Cadastro</Link>
                            <Link className="nav-link" to="/contato">Contato</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    );
}

export default Cabecalho;