import React from "react";
import { Link } from "react-router-dom"

function Nav({count , handleSidebar, cart ,handleCart, cartSide,cartItems} : {cartItems:any,cartSide:string,handleCart: any,cart:any,count : string ; handleSidebar : any}){
   
  const totalItems = cartItems.reduce((total: any, item:any) => total + item.quantity, 0);
  
  return(
      <div className="App navigation">
        <nav >
          
          <div className="left-nav">
            <img className='menu' onClick={handleSidebar} src="https://raw.githubusercontent.com/paluras/ecomerce/91ac1df4f44d4aa40c57ab3bc8328b8611aca607/src/assets/icon-menu.svg" alt="" />
            <img className='logo' src='https://raw.githubusercontent.com/paluras/ecomerce/91ac1df4f44d4aa40c57ab3bc8328b8611aca607/src/assets/logo.svg'></img>
            <div style={{width:count}} className="left-nav-items">
              <ul>
                <img onClick={handleSidebar} 
                className='close' 
                src="https://raw.githubusercontent.com/paluras/ecomerce/91ac1df4f44d4aa40c57ab3bc8328b8611aca607/src/assets/icon-close.svg" 
                alt="icon-close" />
                <li><Link to="/">Collection</Link></li>
                <li><Link to="/men">Men</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li>About</li>
                <li>Contacts</li>
              </ul>
            </div>
            </div>
            <div className="right-nav">
              <div className="uno">
              <img  onClick ={handleCart} src="https://raw.githubusercontent.com/paluras/ecomerce/91ac1df4f44d4aa40c57ab3bc8328b8611aca607/src/assets/icon-cart.svg" alt="" />
              <div className="cart-items">{totalItems }</div>
              </div>
              <div style={{width:cartSide}} className="cart">
                {cart}
              </div>
              <img className='profile' src="https://github.com/paluras/ecomerce/blob/master/src/assets/image-avatar.png" alt="" />
            </div>
        </nav>
        </div>
    )
}

export default Nav