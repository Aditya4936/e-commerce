import React from 'react'
import Announce from '../Componments/Announce'
import Navbar from '../Componments/Navbar'
import Products from '../Componments/Products'
import Newsletter from '../Componments/Newsletter'
import Footer from '../Componments/Footer'

function CategoryPage() {
  return (
    <div>
        <Announce/>
        <Navbar/>
        <div className='flex flex-col p-5'>
            <h1 className='text-[30px]'>Men's Cloth</h1>
            <div className='flex items-center justify-between mt-3'>
                <div className='flex'>
                    <p>Filter by</p>
                    <select className='ml-3 border-2 border-silver'>
                        <option selected disabled>Size</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                    <select className='ml-3 border-2 border-silver'>
                    <option selected disabled>Color</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    </select>
                </div>
                <div className='flex'>
                    <p>Sort by</p>
                    <select className='ml-3 border-2 border-sliver'>
                        <option>Newset (first)</option>
                        <option>Oldest (first)</option>
                        <option>Price (Asc)</option>
                        <option>Price (Des)</option>
                    </select>
                </div>
            </div>
        </div>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default CategoryPage