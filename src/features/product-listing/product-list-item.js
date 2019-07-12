import React from 'react'

export default function ProductListItem(props) {

  return <div className="col-xs-12 space">
    <h3 className="col-xs-3"> {props.product.name}</h3>
    <img className="img-thumbnail col-xs-3"
         src={`/products/${props.product.image}`}
      />
    <div className="col-xs-3">{props.product.description}</div>
    <div className="col-xs-3"> ${props.product.price}</div>
    <button className='btn btn-primary ' onClick={() => props.addToCart(props.product)}> Add to cart  ({
        (props.cartItem && props.cartItem.quantity) || 0
      })</button>
      {props.cartItem 
        ?<button className='btn btn-primary ' onClick={() => props.removeFromCart(props.cartItem)}> remove</button>
        :null
      }
  </div>
 
}