import React from 'react'
import Shoe from '../assets/Shoe.png'

const ListPro = () => {
  return (
    <div className="listPro">
        <div className="listProImg">
            <img src={Shoe} alt="" />
        </div>
        <div className="listProDesc">
            <div className="listProInfo">
                <p>bOat</p>
                <p id='stock'>Stock: 10,000</p>
            </div>
            <p>Wireless Headphones</p>
            <p id='price-list'>Rs. 5000</p>
            <div className="listBtn">EDIT</div>
        </div>
    </div>
  )
}

export default ListPro