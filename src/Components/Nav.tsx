import React from "react";
import { Link } from "react-router-dom"


function Nav({count , handleSidebar, cart ,handleCart, cartSide} : {cartSide:string,handleCart: any,cart:any,count : string ; handleSidebar : any}){
    return(
      <div className="App">
        <nav >
          
          <div className="left-nav">
            <img className='menu' onClick={handleSidebar} src="src\assets\icon-menu.svg" alt="" />
            <img className='logo' src='src\assets\logo.svg'></img>
            <div style={{width:count}} className="left-nav-items">
              <ul>
                <img onClick={handleSidebar} 
                className='close' 
                src="src\assets\icon-close.svg" 
                alt="icon-close" />
                <li><Link to="/">Collection</Link></li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contacts</li>
              </ul>
            </div>
            </div>
            <div className="right-nav">
              <img  onClick ={handleCart} src="src\assets\icon-cart.svg" alt="" />
              <div style={{width:cartSide}} className="cart">
                {cart}
              </div>
              <img className='profile' src="src\assets\image-avatar.png" alt="" />
            </div>
          
            
        </nav>
        </div>
    )
}

export default Nav