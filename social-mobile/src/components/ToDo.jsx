import React from 'react'

export default function ToDo() {
    let pendingOrders = 0
    let outOfStock = 0
    let lowOnStock = 0


  return (
    <div className="todo">
        <div className="top_info">
            <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <p>To do list</p>
        </div>

        <div className="order_info">
            <div className="order_box">
                <p>Pending Orders</p>
                <p>{pendingOrders}</p>
            </div>
            <div className="order_box">
                <p>Out of Stocks</p>
                <p>{outOfStock}</p>
            </div>
            <div className="order_box">
                <p>Low on Stocks</p>
                <p>{lowOnStock}</p>
            </div>
        </div>
    </div>
  )
}
