import { FavoriteBorderOutlined } from '@material-ui/icons';
import { SearchOutlined } from '@material-ui/icons';
import { ShoppingCartOutlined } from '@material-ui/icons';
import React, { useState } from 'react'


const Product = ({ item }) => {

  const [hoverEffect, setHoverEffect] = useState('opeacity-0')
  const handleHoverEnter = () => {
    setHoverEffect(' opacity-1 bg-[rgba(0,0,0,0.2]')
  }
  const handleHoverExit = () => {
    setHoverEffect(' opacity-0')
  }
  const iconStyle = "h-[40px] w-[40px] rounded-full  bg-white items-center justify-center flex m-3 cursor-pointer hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";
                           


  return (
    <div className="flex items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden shadow-lg rounded-md m-2 relative ease-in duration-100" onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverExit}>
      <img src={item.src} alt="product_image relative" />
      <div className={` flex items-center justify-center w-[100%] h-[100%] absolute transition-duration:100ms` + hoverEffect}>
        {/* icons */}
        <div className={iconStyle}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconStyle}>
          <FavoriteBorderOutlined />
        </div>
        <div className={iconStyle}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  )
}

export default Product;