import React from 'react'
import { connect } from  'react-redux'

function Cart(props){
return <table >
<thead>
  <tr className="row">
    <th className="col-xs-5">item</th>
    <th className="col-xs-5">quantity</th> 

  </tr>
</thead>
<tbody>
{
	props.cart.map(item =>
  <tr className="row">
		<td className="col-xs-5">{item.name}</td>
		<td className="col-xs-5">{item.quantity}</td>
		<td className="col-xs-2"> <button onClick={(e)=>props.removeFromCart(item)}>-</button></td>
		</tr>


		)
}
</tbody>
</table>
} 
function mapStateToProps(state){
	return{
		cart:state.cart
	}
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
