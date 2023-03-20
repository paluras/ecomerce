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






function App() {

        interface CartItem {
                id: number;
                name: string;
                price: number;
                photo:string;
              }
        
        const [count, setCount] = useState("")
        const [sidebar, setSidebar] = useState(false)
        const [cartItems, setCartItems] = useState<CartItem[]>([]);
        const [cartSide, setCartSide] = useState("")
        const [sideWidth, setSideWidth] = useState(false)


        function handleSidebar(){
              setSidebar(!sidebar) 
              sidebar?setCount("300px"): setCount("") 
        }

        function handleCart(){
                setSideWidth(!sideWidth) 
                sideWidth?setCartSide("200px"): setCartSide("") 
          }

        const addToCart = (item: any) => {
                setCartItems([...cartItems, item]);
              }

                        let cart =   <div className='thecart'>
                        {cartItems.map((item) => (
                <div key={item.id}>
                <img src={item.photo}></img>
                <p>{item.name} - {item.price}$</p>
                </div>
                ))}     <button>CheckOut</button>
                        </div>
       
        
    return (
        <>
        <Nav count={count} handleSidebar={handleSidebar} cart={cart} cartSide={cartSide} handleCart={handleCart} />
        
      <Routes>
        <Route path='/:id' element={ <ProductDetail addToCart={addToCart} /> } />
        
        <Route path='/'
        element={ 
        <Home 
         count={count}
         handleSidebar={handleSidebar} 
         allProducts={data.products} 
         /> } />
        
        
      
      
      </Routes>
</>
    )
}

export default App;
