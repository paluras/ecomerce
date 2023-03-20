import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import productsData from '../db.json';



//console.log(smth);



const ProductDetail = ({addToCart}:{addToCart : any}) => {


  const { id } = useParams();

  


  
  const product : any = productsData.products.find((p) => p.id.toString() === (id));
  console.log(id);

    return(
        <main>
        
        <div className="left-main-imgs">
          <img src={product?.photo} alt="" />
          <div className="bottom-imgs">
              <img src="src\assets\image-product-1-thumbnail.jpg" alt="" />
              <img src="src\assets\image-product-1-thumbnail.jpg" alt="" />
              <img src="src\assets\image-product-1-thumbnail.jpg" alt="" />
              <img src="src\assets\image-product-1-thumbnail.jpg" alt="" />
          </div>
        </div>
        <div className="right-main-description">
          <p className='maker'>{product?.category}</p>
          <h1>{product?.name}</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit cum nihil quas, unde numquam ab iure sunt asperiores est, possimus animi commodi reiciendis aperiam rerum</p>
          <div className="price-container">
            <div className="price">
                <h2>{product?.price}$</h2>
                <div className="offer">50%</div>
            </div>
                <div className="oldprice">123</div>
              <div className="buttons-price">
                <div className="add-items">
                  <div className="minus">-</div>
                  <div className="amount">0</div>
                  <div className="plus">+</div>
                </div>
              <div onClick={() => addToCart(product)} className="add-to-cart">
                <img src="src\assets\icon-cart.svg" alt="cart" />
                Add to cart
                </div>  
              </div>
            </div>
          
        
        </div>
      </main>
    )
}

export default ProductDetail