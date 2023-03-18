import React from "react";
import { Link } from "react-router-dom"


function Nav({count , handleSidebar } : {count : string ; handleSidebar : any}){
    return(
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
              <img src="src\assets\icon-cart.svg" alt="" />
              <img className='profile' src="src\assets\image-avatar.png" alt="" />
            </div>
          
          
        </nav>
    )
}

export default Nav