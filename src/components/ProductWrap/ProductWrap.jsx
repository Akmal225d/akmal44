import React from "react";
import s from "./ProductWrap.module.scss";
const ProductWrap = ({ product}) => {
  return (
    <>
      <section className={s.productwrap}>
        <div className="container">
          <div className={s.wrap}>
            <div className={s.images}>
                <div>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                </div>
                <img src={product.image} alt="" />
          
           
              </div>
              </div>
              <div>
            
             
            </div>

            <div className={s.box}>
    <div>
        <h2> {product.name}</h2>
        <h3>⭐⭐⭐⭐ 4/5</h3>
        <div className={s.price}>
      <b>{product.price}</b>      
               <s>{Math.floor(product.price * 1.1)} сум</s>
        </div>
        <p></p>
    </div>
    
    
    
    <div/>
          </div>


          <div>
          <p>Select Colors</p>
<div></div>
<div></div>
<div></div>
          </div>

          <div>
<p></p>
<div className={s.btns}></div>
<button>Small</button>
<button>Medium</button>
    <button>Large</button>
    <button>X-Large</button>
          </div>

          <div>
            <div className={s.count}>
                <button>--</button>
                <p>1</p>
                <button>+</button>
            </div>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductWrap;