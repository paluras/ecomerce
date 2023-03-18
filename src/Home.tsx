import React from "react";
import Nav from "./Components/Nav";
import { useState } from 'react'
import Card from "./Card";
import { Link } from "react-router-dom"

function Home({count,handleSidebar,allProducts}:{allProducts:any ,count:string,handleSidebar:any}){
   
    return(
        <div className="App">
            <Nav count={count} handleSidebar={handleSidebar}/>
            <div className="home-list">
        {allProducts.map((season : any) => (
          
            <li key={season.id} 
                id={season.id}>
                
                <Card 
                id={season.id}
                name={season.name}
                price={season.price}
                photo={season.photo}
                category={season.category}
                 />
                  
            </li>
                
        ))}
        
        </div>
        
        </div>
        
    )
}

export default Home

