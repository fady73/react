import React from 'react'
import ProductListItem from './product-list-item'
import { connect } from 'react-redux'
import { cartItemsWithQuantities } from '../cart';

 function ProductListing(props) {
  return <div className="container">
  <div className="row">
  <div className="col-12">
    {props.products.map(product=> 
    	<ProductListItem product={product}           
    	addToCart={props.addToCart}
      removeFromCart={props.removeFromCart}
    	cartItem={props.cart.filter(cartItem =>cartItem.id===product.id)[0]}

/> )}
  </div>
  </div>
  </div>
}
function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)