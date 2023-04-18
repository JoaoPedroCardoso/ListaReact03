export default function Post(props) {
    return (
        <div className="post">
            <div className="foto">
                <img src={props.foto}/>
            </div>
            <h2>{props.titulo}</h2>
            <p className="recomendacao">{props.recomendacao}</p>
            <p className="depoimento">{props.depoimento}</p>
        </div>
    );
}