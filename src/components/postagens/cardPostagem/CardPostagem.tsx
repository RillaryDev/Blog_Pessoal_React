import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between '>
      <div>
        <div className="flex w-full bg-slate-400 py-2 px-4 items-center gap-4 m-0">
          <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>{post.usuario?.nome}</h3>
        </div>
        <div className='p-4 bg-slate-300 m-1'>
          <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
          <p>{post.texto}</p>
          <p>Tema: {post.tema?.descricao}</p>
          <p>Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(post.data))}</p>
        </div>
      </div>
      <div className="flex ">
      <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-slate-900 hover:bg-slate-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-red-700 hover:bg-red-600 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardPostagem