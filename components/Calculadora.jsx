import BackspaceIcon from '@mui/icons-material/Backspace';
import { useState } from 'react'
import Boton from './Boton'
import Switch from './Switch'
import './calculadora.css'

const Calculadora = () => {

  const [data, setData] = useState({ operacion: '', resultado: ''})

  const escritura = (event) => {
    const valor = event.target.innerText
    const esOperacion = valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '%'

    if (data.operacion.length >= 13) return
    
    if (valor === '%' && data.operacion.includes('%')) return

    if (data.operacion.includes('Error')) {
      setData({...data, operacion: valor})
    } else if (data.resultado !== '' && data.operacion === '' && esOperacion) {
      setData({...data, operacion: `${data.resultado}` + valor})
    } else {
      setData({...data, operacion: `${data.operacion}` + valor})
    }    
  }

  const borrar = () => {
    setData({...data, operacion: data.operacion.slice(0, data.operacion.length - 1)})
  }
  
  const borrarTodo = () => {
    setData({operacion: '', resultado: ''})
  }

  const resultado = () => {
    try {
    let resultado = ''

    if(data.operacion.includes('%')) {
      const valores = data.operacion.split('%')
      resultado = eval(`${valores[1]}*(${valores[0]}/100)`)
    } else {
      resultado = eval(data.operacion)
    }
    resultado = resultado.toString().slice(0, 13);

    setData({...data, resultado, operacion: ''})

    } catch (error) {
      setData({...data, operacion: 'Error'})
    }
  }

  return (
    <main>
      <Switch />
      <span className="resultado">{data.resultado}</span>
      <span className="display">{data.operacion}</span>
      <Boton texto='C' clase='gris naranja' handleClick={borrarTodo}/>
      <Boton texto={<BackspaceIcon />} clase='gris naranja' handleClick={borrar}/>
      <Boton texto='%' clase='gris naranja' handleClick={escritura}/>
      <Boton texto='/' clase='operacion naranja' handleClick={escritura}/>
      <Boton texto='7' clase='numero' handleClick={escritura}/>
      <Boton texto='8' clase='numero' handleClick={escritura}/>
      <Boton texto='9' clase='numero' handleClick={escritura}/>
      <Boton texto='*' clase='operacion naranja' handleClick={escritura}/>
      <Boton texto='4' clase='numero' handleClick={escritura}/>
      <Boton texto='5' clase='numero' handleClick={escritura}/>
      <Boton texto='6' clase='numero' handleClick={escritura}/>
      <Boton texto='-' clase='operacion naranja' handleClick={escritura}/>
      <Boton texto='1' clase='numero' handleClick={escritura}/>
      <Boton texto='2' clase='numero' handleClick={escritura}/>
      <Boton texto='3' clase='numero'  handleClick={escritura}/>
      <Boton texto='+' clase='operacion naranja' handleClick={escritura}/>
      <Boton />
      <Boton texto='0' clase='numero' handleClick={escritura}/>
      <Boton texto='.' clase='numero' handleClick={escritura}/>
      <Boton texto='=' clase='operacion igual' handleClick={resultado}/>
    </main>
  )
}

export default Calculadora
