import React from 'react';
import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Rodapes from './componentes/Rodapes';
import Conteudo,{OlaMundo} from './componentes/Conteudo';

// arquivo app jsx
// componente funcional, porque ele é uma função
//
function App() {
  OlaMundo()
  // todo componente deve retornar um html, entre parenteses
  return (
    // o react substitui classname por class pq class é palavra reservada
    <>

    {/* nosso cabecalho tem uma propriedade chamada titulo */}
    

    <Cabecalho logo="logo192.png" titulo = "Fav.io" subtitulo="O melhor gerenciador de favoritos da internet Brasileira!!!"/>
    <Conteudo> </Conteudo>
    <Rodapes/>
    </>
  );
}

export default App;
