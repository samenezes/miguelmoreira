import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecalho from './componentes/cabecalho'
import Rodape from './componentes/rodape'
import Main from './componentes/main'

function App() {

  return (
    <>
      <Cabecalho/>
      <Main/>
      <Rodape/>
    </>
  )
  mostraDados();
}

export default App
