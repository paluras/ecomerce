import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import productsData from '../db.json';

const ProductDetail = ({addToCart, handlePlus , handleMinus, prductCount}:{prductCount: number,handlePlus: any , handleMinus: any,addToCart : any}) => {
 
  const { id } = useParams();

  const product : any = productsData.products.find((p) => p.id.toString() === (id));
  console.log(id);

    return(
      <div className="App">
        <main>
        
        <div className="left-main-imgs">
          <img src={product?.photo} alt="" />
          <div className="bottom-imgs">
              <img src="https://raw.githubusercontent.com/paluras/ecomerce/master/src/assets/image-product-1-thumbnail.jpg" alt="thumb" />
              <img src="https://raw.githubusercontent.com/paluras/ecomerce/master/src/assets/image-product-1-thumbnail.jpg" alt="thumb" />
              <img src="https://raw.githubusercontent.com/paluras/ecomerce/master/src/assets/image-product-1-thumbnail.jpg" alt="thumb" />
              <img src="https://raw.githubusercontent.com/paluras/ecomerce/master/src/assets/image-product-1-thumbnail.jpg" alt="thumb" />
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
                  <div onClick={handleMinus} className="minus">-</div>
                  <div className="amount">{prductCount}</div>
                  <div onClick={handlePlus} className="plus">+</div>
                </div>
              <div onClick={() => addToCart(product)} className="add-to-cart">
                <img src="https://raw.githubusercontent.com/paluras/ecomerce/cbcdf196ab94f7a391739ec4b84a367ef76d46c6/src/assets/icon-cart.svg" alt="cart" />
                Add to cart
                </div>  
              </div>
            </div>
          
        
        </div>
      </main>
      </div>  
    )
}

export default ProductDetail