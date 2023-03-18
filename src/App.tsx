import { Routes, Route } from 'react-router-dom';
import MainProduct from './MainProduct';
import data from "./db.json"
import Home from './Home';
import { useState } from 'react'
import "./App.css"
//import About from './About';
//import Blog from './Blog';
import { useParams } from 'react-router-dom';






function App() {
        
        const [count, setCount] = useState("")
        const [sidebar, setSidebar] = useState(false)
      
        function handleSidebar(){
              setSidebar(!sidebar) 
              sidebar?setCount("300px"): setCount("") 
        }
       
        
    return (
      <Routes>
        <Route path='/:id' element={ <MainProduct count={count} handleSidebar={handleSidebar}/> } />
        
        <Route path='/'
        element={ 
        <Home 
         count={count}
         handleSidebar={handleSidebar} 
         allProducts={data.products} 
         /> } />
        
        
      
      
      </Routes>
    )
}

export default App;
