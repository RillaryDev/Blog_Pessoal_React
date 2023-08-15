import FormularioPostagem from '../formularioPostagem/FormularioPostagem';
import ListaPostagem from '../../../components/postagens/listaPostagens/ListaPostagens'

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalPostagem.css'

function ModalPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-black'>Nova postagem</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-black'>Ver Produtos</button>} modal>
        <div>
          <ListaPostagem /> 
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;