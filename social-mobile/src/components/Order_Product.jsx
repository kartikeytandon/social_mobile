import React from 'react'
import Headphones from '../assets/Headphones.png'

const Order_Product = () => {
  let pro_name = 'bOat Headphones Wireless'
  let order_id = '3142'
  let size = 'Free Size'
  let pro_id = '3142'
  let qty = '2'

  return (
    <div className="pro_area">
        <div className="proImg">
            <img src={Headphones} alt="" />
        </div>
        <div className="proInfo">
            <h4>{pro_name}</h4>
            <p>Order ID: {order_id}</p>
            <p>Size: {size}</p>
            <p>Product Id: {pro_id}</p>
            <p>Quantity: {qty}</p>
        </div>
    </div>
  )
}

export default Order_Product