import {useState} from "react"


const DarkModeWidget = () => {

  const [ darkMode, setDarkMode ] = useState(false)


  const cambiarModo = ()=>{
    setDarkMode (!darkMode)
  }
  console.log (darkMode)
  return (
    <div>
      <button onClick={cambiarModo}>de modo claro a oscuro</button>
      </div>
  )
}

export default DarkModeWidget