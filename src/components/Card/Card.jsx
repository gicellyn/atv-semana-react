import './Card.css';

function Cards(props) {
    return(
        <section className="card-corpo">
            <img src={props.linkImg}/>
            <p>{props.descricao}</p>
            <small>{props.direcao}</small>
        </section>
    );
}

export default Cards;