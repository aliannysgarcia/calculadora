import { useState } from 'react'
import { useEffect } from 'react'
import './switch.css'

const Switch = () => {

  const [theme, setTheme] = useState('claro')
  const handleChange = (e) => setTheme(e.target.checked ? 'oscuro' : 'claro')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  

  return (
 
    <section className='switch'>
    
      <label className="toggle">
        <input type="checkbox" className='check-switch' onChange={handleChange} hidden/>
        <span className='slider'/>
      </label>
      
    </section>
   
  )
}

export default Switch