import "./Rodape.css"

function Rodape() {
    return (
        <div className="footer">
            <section className="section">
                <h3>CODE+</h3>
                <p >©2024 Code+. Todos os direitos reservados.</p>
            </section>
            <section className="lista-redes">
                <h4>Redes Sociais</h4>
                <a href="#"><img src="./images/facebook.png" alt="facebook" width="30" /></a>
                <a href="#"><img src="./images/instagram.png" alt="instagram" width="30" /></a>
            </section>
            <nav className="lista-infos">
                <a href="#">Contato</a>
                <a href="#">Sobre nós</a>
                <a href="#">FAQ de perguntas</a>
            </nav>
        </div>

    );
}

export default Rodape;