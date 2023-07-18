import React from 'react'

const Item = ({name, price, id, img, addToCart}) => {
  return (
    <div className= "item-box">
    <div>{name}</div>
    <img src={img} width="80" height="55" />
    <div className='item-price'>${price}</div>
    <button className='item-add-button' onClick={() => addToCart()} >+ Add to cart</button>

    </div>

  )
}

export default Item