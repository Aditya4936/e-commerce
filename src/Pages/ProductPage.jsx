import React from 'react'
import Announce from '../Componments/Announce'
import Navbar from '../Componments/Navbar'
import Newsletter from '../Componments/Newsletter'
import Footer from '../Componments/Footer'
import Counter from '../Componments/Counter'

function ProductPage() {
    return (
        <div>
            <Announce />
            <Navbar />
            <div className='flex justify-center'>
                <div className='flex flex-1 item-center justify-center'>
                    <img src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812"
                        alt="product_image"
                        className='h-[70%] w-[70%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300' />
                </div>
                <div className='flex-[1.3] flex justify-items-start flex-col mt-10 items-start'>
                    <h1 className='title text-[40px]'>Black Hoody orignal</h1>
                    <p className='pr-[4rem] text-justify mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia,<br />
                        accusantium sed rerum voluptas, provident molestiae omnis, optio nulla et ab!<br />
                        Eveniet ipsam adipisci nulla, distinctio est cumque. Illum, vero.
                    </p>
                    <p className='mt-7 text-3xl'>Price: <b>₹4000</b></p>
                    {/* color */}
                    <div className='flex text-2xl mt-7'>
                        Colors:
                        <div className='bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] ml-5  cursor-pointer hover:border-[#8a4af3]'></div>
                        <div className='bg-black w-[2rem] h-[2rem] rounded-full border-2 p-[10px] ml-5  cursor-pointer hover:border-[#8a4af3]'></div>
                        <div className='bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] ml-5  cursor-pointer hover:border-[#8a4af3]'></div>
                    </div>
                    <div className='mt-7 text-2xl'>
                        Size:
                        <select className='ml-3 border-2 border-silver'>
                            <option selected disabled>Size</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    </div>
                    <div className='mt-5'>
                        <Counter />
                    </div>
                    <button className='btn mt-5'>Add to Cart</button>
                </div>
            </div>

            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductPage