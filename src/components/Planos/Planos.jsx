import "./Planos.css";


function Planos(props) {
    const valorDesconto = props.valor - props.valor * (props.desconto / 100);
    return (
        
        <section className="card-planos">
            <p>Plano: {props.nome}</p>
            {props.desconto > 0 && <p className='grifado'>R$ {props.valor}</p>}
            {props.desconto > 0 ? <h4>R${valorDesconto}</h4> : <h4>R${props.valor}</h4>}
            {props.desconto > 0 && <p className='desconto'>{props.desconto}% OFF</p>}
        </section>

    );
}

export default Planos;