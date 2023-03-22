import { Routes, Route } from 'react-router-dom';
import data from "./db.json"
import Home from './Home';
import { useState } from 'react'
import "./App.css"
//import About from './About';
//import Blog from './Blog';
import { useParams } from 'react-router-dom';
import ProductDetail from './Components/Product';
import Nav from './Components/Nav';
import About from './Components/About';
import AboutUs from './Components/Contacts';

function App() {

        interface CartItem {
                id: number;
                name: string;
                price: number;
                photo:string;
                quantity:number;
              }
        
        const [count, setCount] = useState("")
        const [sidebar, setSidebar] = useState(false)
        const [cartItems, setCartItems] = useState<CartItem[]>([]);
        const [cartSide, setCartSide] = useState("")
        const [sideWidth, setSideWidth] = useState(false)
        const [prductCount , setProductCount] = useState(1)      
        const resultWomen = data.products.filter(word => word.category == "Womens Footwear");
        const resultMen = data.products.filter(word => word.category == "Mens Footwear");
       
        function handlePlus(){
                setProductCount(prevstate => prevstate + 1)
              }
            
              function handleMinus(){
                setProductCount(prevstate => prevstate - 1)
              }

        function handleSidebar(){
              setSidebar(!sidebar) 
              sidebar?setCount("300px"): setCount("") 
        }

        function handleCart(){
                setSideWidth(!sideWidth) 
                sideWidth?setCartSide("300px"): setCartSide("") 
          }

        const addToCart = (item: any) => {
                const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id ===item.id)
                if(existingItemIndex >= 0){
                        const updateCartItems = [...cartItems]
                        updateCartItems[existingItemIndex].quantity += prductCount;
                        setCartItems(updateCartItems)
                }else{  
                        const newCartItem = {...item, quantity: prductCount};
                        setCartItems([...cartItems, newCartItem]);
                }
                
              }

        const removeFromCart = (itemId:any) => {
                const newCartItems = cartItems.filter(item => item.id !== itemId )
                setCartItems(newCartItems)
        }      
              
              
        let cart = <div className='thecart'>
                        {cartItems.map((item) => (
                <div key={item.id}
                        >{item.quantity}
                <img src={item.photo}></img>
                <p>{item.name} - {item.price}$</p>
                <img onClick={() => removeFromCart(item.id)}
                 className='delete' src="https://raw.githubusercontent.com/paluras/ecomerce/cbcdf196ab94f7a391739ec4b84a367ef76d46c6/src/assets/icon-delete.svg" alt="" />
                </div>
                ))}     <button>CheckOut</button>
                        </div>
        
    return (
        <>
        <Nav count={count} handleSidebar={handleSidebar} cart={cart} cartSide={cartSide} handleCart={handleCart} cartItems={cartItems} />
        
      <Routes>
        <Route path='/:id' element={ <ProductDetail addToCart={addToCart} prductCount={prductCount} handlePlus={handlePlus} handleMinus={handleMinus} /> } />
        
        <Route path='/'
        element={ 
        <Home 
         allProducts={data.products} 
         /> } />
         <Route path='/men'
        element={ 
        <Home 
         allProducts={resultMen} 
         /> } />
         <Route path='/women'
        element={ 
        <Home 
         allProducts={resultWomen} 
         /> } />
         
      </Routes>
                <About />
                <AboutUs />
</>
    )
}

export default App;
