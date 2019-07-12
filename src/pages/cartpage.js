import React from 'react'
import Cart from '../features/cart'
import ProductListing from '../features/product-listing'
import data from '../data/products.json'
export default function CartPage(props) {
  return <div>
    <h2>My Cart</h2>
    <Cart/>

  </div>
}