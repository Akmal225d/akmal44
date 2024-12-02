import React from 'react'
import s from './Category.module.scss'
import Products from '/public/products.json'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
const Category = () => {
  return (
<>

<section className={s.Category}>
    <div className="container">
        <div className={s.wrapper}>

            {Products.map(card => (
             <Link key={card.id} to={`/product/${card.id}`} className={s.Link}>
                      <Card key={card.id} image={card.image} nme={card.name} price={card.price}/>
             </Link>
            ))}
        </div>
    </div>
</section>
</>
  )
}   

export default Category
