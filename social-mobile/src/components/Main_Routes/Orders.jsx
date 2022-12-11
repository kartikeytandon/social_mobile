import React from 'react'
import OrderNo from '../OrderNo'
import Order_Product from '../Order_Product'
import TopNav from '../TopNav'

function Orders() {
  return (
    <>
        <TopNav />
        <OrderNo />
        <Order_Product />
        <Order_Product />
        <div id='partition'></div>
        <OrderNo />
        <Order_Product />
    </>
  )
}

export default Orders