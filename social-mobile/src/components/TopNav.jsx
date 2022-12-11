import React from 'react'

const TopNav = () => {
  let pro = 10
  return (
    <>
        <div className="top_nav">
            <li id='active-nav'>Pending</li>
            <li>Ready to Ship</li>
            <li>Shipped</li>
            <li>Cancelled</li>
        </div>
        <div className="select">
            <input type="radio" />
            <label htmlFor="">Select All ({ pro })</label>
        </div>
    </>
  )
}

export default TopNav