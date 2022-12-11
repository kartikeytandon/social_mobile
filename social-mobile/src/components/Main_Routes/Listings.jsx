import React from 'react'
import ListNav from '../ListNav'
import ListPro from '../ListPro'

const Listings = () => {
  return (
    <>
        <ListNav />
        <div className="pro_list">
          <ListPro />
          <ListPro />
          <ListPro />
          <ListPro />
        </div>
    </>
  )
}

export default Listings