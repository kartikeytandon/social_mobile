import React from 'react'

const OrderNo = () => {
  let order_no = "32137192"
  return (
    <div className="select no_border" style={{ fontWeight: 500 }}>
        <input type="radio" />
        <label htmlFor="">Order Number { order_no }</label>
    </div>
  )
}

export default OrderNo