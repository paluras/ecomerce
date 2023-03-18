import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Product from './Components/Product'
import data from "./db.json"

function MainProduct({count,handleSidebar}:{count:string,handleSidebar:any}) {


  return (
    <div className="App">
       <Nav count = {count}
            handleSidebar = {handleSidebar}  
        /> 
        <Product  />
        
    </div>
  )
}

export default MainProduct
