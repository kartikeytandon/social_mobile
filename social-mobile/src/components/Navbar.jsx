import React from 'react'
import { Link } from 'react-router-dom'
import homeImg from '../assets/Home.png'
import orderImg from '../assets/Orders.png'
import listingImg from '../assets/Listings.png'
import returnImg from '../assets/Orders.png'
import noteImg from '../assets/Notifications.png'

export default function Navbar() {
  return (
    <div className="navBar">
        <li id='active'>
            <img src={homeImg} alt="" />
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/home">Home</Link>
        </li>
        <li>
            <img src={orderImg} alt="" />
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/orders">Orders</Link>
        </li>
        <li>
            <img src={listingImg} alt="" />
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/listings">Listings</Link>
        </li>
        <li>
            <img src={returnImg} alt="" />
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/home">Returns</Link>
        </li>
        <li>
            <img src={noteImg} alt="" />
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/home">Notifications</Link>
        </li>
    </div>  
  )
}