import React from "react";

function Product(){
    return(
        <main>
        <div className="left-main-imgs">
          <img src="src\assets\image-product-1.jpg" alt="" />
          <div className="bottom-imgs">
              <img src="src\assets\image-product-1-thumbnail.jpg" alt="" />
              <img src="src\assets\image-product-1-thumbnail.jpg" alt="" />
              <img src="src\assets\image-product-1-thumbnail.jpg" alt="" />
              <img src="src\assets\image-product-1-thumbnail.jpg" alt="" />
          </div>
        </div>
        <div className="right-main-description">
          <p className='maker'>SNEAKER COMPANY</p>
          <h1>Fall Limited Sneakers</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit cum nihil quas, unde numquam ab iure sunt asperiores est, possimus animi commodi reiciendis aperiam rerum</p>
          <div className="price-container">
            <div className="price">
                <h2>$123.00</h2>
                <div className="offer">50%</div>
            </div>
                <div className="oldprice">$250.00</div>
              <div className="buttons-price">
                <div className="add-items">
                  <div className="minus">-</div>
                  <div className="amount">0</div>
                  <div className="plus">+</div>
                </div>
              <div className="add-to-cart">
                <img src="src\assets\icon-cart.svg" alt="cart" />
                Add to cart
                </div>  
              </div>
            </div>
          
        
        </div>
      </main>
    )
}

export default Product