import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Product from './Components/Product'

function App() {
  const [count, setCount] = useState("")
  const [sidebar, setSidebar] = useState(false)

  function handleSidebar(){
        setSidebar(!sidebar) 
        sidebar?setCount("300px"): setCount("") 
  }

  console.log(sidebar);


  return (
    <div className="App">
       <Nav count = {count}
            handleSidebar = {handleSidebar}  
        /> 
        <Product />
    </div>
  )
}

export default App
