import Cards from "../Card/Card";
import "./Galeria.css";
import Planos from "../Planos/Planos"

const filmes = [
    { cod: 1, linkImg: "images/acidadeeumaso.jpg", descricao: "Documentário, Drama Comédia / Híbrido / 79' / 2013 / Brasil", direcao: "Direção: Adirley Queirós" },
    { cod: 2, linkImg: "images/66questoes-1.png", descricao: "Drama / Ficção / 112' / 2022 / Grécia, França", direcao: "Direção: Jacqueline Lentzou" },
    { cod: 3, linkImg: "images/HoraDaEstrela.jpg", descricao: "Drama / Ficção / 99' / 2024 (1985) / Brasil", direcao: "Direção: Suzana Amaral" },
    { cod: 4, linkImg: "images/animal-politico.png", descricao: "Drama, Experimental / Ficção / 71' / 2016 / Brasil", direcao: "Direção: Tião" },
    { cod: 5, linkImg: "images/as-hiper-mulheres.jpg", descricao: "Documentário / Documentário / 79' / 2011 / Brasil", direcao: "Direção: Takuma Kuikuro, Leonardo Sette, Fausto Carlos" },
    { cod: 6, linkImg: "images/como-matar-a-besta.jpg", descricao: "Drama, Fantasia / Ficção / 80' / 2022 / Argentina, Brasil, Chile", direcao: "Direção: Agustina San Martín" }
];

const cardsFilmes = filmes.map((filme) => {
    return <Cards key={filme.cod} linkImg={filme.linkImg} descricao={filme.descricao} direcao={filme.direcao} />
});

function Galeria() {
    return (
        <div className="galeria-corpo">
            <h1>LISTA DE FILMES</h1>
            <section className="lista">{cardsFilmes}</section>
            <section className="planos">
                <Planos nome="Mensal" valor={60} desconto={0}/>
                <Planos nome="Anual" valor={299} desconto={10} />
           </section>
        </div>

    )
}

export default Galeria;