import "./Post.css"
import PostModelo from "componentes/PostModelo";
import posts from "json/posts.json"
import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import NaoEncontrada from "paginas/NaoEncontrada";


export default function Post(){
    const parametros = useParams();
    
    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })


     if(!post){

        return <NaoEncontrada />
     }
    return (
        <PostModelo
        fotoCapa={`assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
        >
        
        <div className="post-markdown-container">
        <ReactMarkdown>
        
        {post.texto}

            </ReactMarkdown>    
        </div>

        </PostModelo>
    )
}