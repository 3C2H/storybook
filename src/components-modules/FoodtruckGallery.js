import React from 'react'
import Itemblock from './Itemblock'
import './FoodtruckGallery.css'

const FoodtruckGallery = ({ items = [] }) =>
  <div className="s-mt-1 s-d-flex">
    {items.map((item, index) =>
      <Itemblock key={index} src="http://via.placeholder.com/150x150">
      </Itemblock>)}
  </div>
export default FoodtruckGallery