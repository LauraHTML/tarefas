import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  //useState = manipula o estado da variavel
  const  [tarefas, setTarefas] = useState(() => {
    const salvarTarefas = localStorage.getItem('itemTarefa');
    return salvarTarefas ? JSON.parse(salvarTarefas) : [];
  });
  const [campo, setCampo] = useState('');

  //useEffect - executa a função quando o componente renderiza, ou quando o estado muda
  useEffect(() => {
    localStorage.setItem('itemTarefa', JSON.stringify(tarefas));
  },[tarefas]); //se tarefas mudar, o useeffect é executado

  return (
    <>
    </>
  )

  function ola(nome){
    console.log(`ola ${nome}`)
  }
  ola('laura')
}

export default App