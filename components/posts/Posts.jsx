import Post from "./Post";
import avaliacoes from './js/avaliacoes.js';

export default function Posts() {
    let indexs = [];

    while (indexs.length < 3) {
        let index = Math.floor(Math.random() * 4);
        if (!indexs.includes(index)) {
            indexs.push(index);
        }
    }

    const avaliacao01 = avaliacoes[indexs[0]]
    const avaliacao02 = avaliacoes[indexs[1]]
    const avaliacao03 = avaliacoes[indexs[2]]

    return(
        <div className="root">
            {
            <Post titulo={avaliacao01.titulo} foto={avaliacao01.foto} recomendacao={avaliacao01.recomendacao} depoimento={avaliacao01.depoimento} />  
            }
            {
            <Post titulo={avaliacao02.titulo} foto={avaliacao02.foto} recomendacao={avaliacao02.recomendacao} depoimento={avaliacao02.depoimento} />  
            }
            {
            <Post titulo={avaliacao03.titulo} foto={avaliacao03.foto} recomendacao={avaliacao03.recomendacao} depoimento={avaliacao03.depoimento} />  
            }
        </div>
    );
}