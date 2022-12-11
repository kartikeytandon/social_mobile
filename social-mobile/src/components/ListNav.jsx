import React from 'react'

const ListNav = () => {
  return (
    <>
        <div className="top_nav">
            <li id='active-nav'>MY PRODCUTS</li>
            <li>IN PROGRESS</li>
            <li>DRAFTS</li>
        </div>
        <div className="search_bar">
            <input type="text" placeholder='Seach for Product Vertical'/>
        </div>
    </>
  )
}

export default ListNav