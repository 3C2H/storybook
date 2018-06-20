import React from 'react'
import Itemblock from './Itemblock'

const MenuItems = ({ items = [] }) =>
  <div className="s-mt-1 s-d-flex">
    {items.map((item, index) =>
      <Itemblock key={index} src="http://via.placeholder.com/150x150">
        Name-{index+1} item Name-{index+1} item Name-{index+1} item PRIX
      </Itemblock>)}
  </div>
export default MenuItems