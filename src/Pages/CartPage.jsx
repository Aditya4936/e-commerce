import React from 'react'
import Announce from '../Componments/Announce'
import Navbar from '../Componments/Navbar'
import Newsletter from '../Componments/Newsletter'
import Footer from '../Componments/Footer'
import Counter from '../Componments/Counter'
function CartPage() {
    return (
        <div>
            <Announce />
            <Navbar />
            <div>
                <div className='flex justify-center text-5xl'>
                    cart</div>
                <div className='flex items-center justify-between mt-4'>
                    <button className='btn bg-white border-2 hover:bg-white text-[blue]'>Continue Shopping</button>
                    <div className='flex underline text-lg hover:cursor-pointer '>
                        <p>Itens in your Cart:3</p>
                        <p className='ml-5'>Whitelist Item:0</p>
                    </div>

                    <button className='btn pl-5' >Checkout</button>
                </div>
                {/* central div */}
                <div className='flex mt-7'>
                    <div className='flex flex-col flex-1 ' >
                        {/* list of product div */}
                        {/* first product */}
                        <div className='flex w-[100%] h-auto items-center '>
                            <div className='product flex self-start pl-5'>
                                <img
                                    className='h-[80%] w-[7.2rem] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300'
                                    src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                                    alt="product_img" />
                                <div className=' description flex  flex-col ml-5 h-auto justify-between'>
                                    <p>
                                        <b className='mr-2'>ID:</b>156868498
                                    </p>
                                    <p>
                                        <b className='mr-2'>Product:</b>Sky t-shirt
                                    </p>
                                    <p className='justify-start items-center flex'>
                                        <b className='mr-2'>Color:</b>
                                        <div className='bg-sky-600 w-[20px] h-[20px] rounded-full border-2 p-[10px] ml-1  cursor-pointer'></div>
                                    </p>
                                    <p>
                                        <b className='mr-2'> Size:</b>M
                                    </p>

                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center flex-auto'>
                                <Counter />
                                <p className='flex justify-center items-center mt-3 text-4xl'>
                                    <b>₹800</b>
                                </p>
                            </div>
                        </div>
                        <hr className='mt-7 mb-7' />
                        {/* second product */}
                        <div className='flex w-[100%] h-auto items-center '>
                            <div className='product flex self-start pl-5'>
                                <img
                                    className='h-[80%] w-[7.2rem] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300'
                                    src="https://cdn.shopify.com/s/files/1/0240/7285/products/VisitorsCrewneckSweatshirtinWhite11_360x.jpg?v=1642719779"
                                    alt="product_img" />
                                <div className=' description flex  flex-col ml-5 h-auto justify-between'>
                                    <p>
                                        <b className='mr-2'>ID:</b>15687956
                                    </p>
                                    <p>
                                        <b className='mr-2'>Product:</b>White Hoddy
                                    </p>
                                    <p className='justify-start items-center flex'>
                                        <b className='mr-2'>Color:</b>
                                        <div className='bg-white w-[20px] h-[20px] rounded-full border-2 p-[10px] ml-1  cursor-pointer'></div>
                                        <div className='bg-black w-[20px] h-[20px] rounded-full border-2 p-[10px] ml-1  cursor-pointer'></div>

                                    </p>
                                    <p>
                                        <b className='mr-2'> Size:</b>M
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center flex-auto'>
                                <Counter />
                                <p className='flex justify-center items-center mt-3 text-4xl'>
                                    <b>₹8000</b>
                                </p>
                            </div>
                        </div>
                        <hr className='mt-7 mb-7' />

                    </div>
                    <div className='pl-5 flex-[0.4] w-auto h-[40vh] border-2 border-[blue] rounded-md shadow-lg flex flex-col items-center'>
                        <h1 className='text-[2rem]'>Summary</h1>
                        <div className='flex justify-between mt-3 w-[100%]'>
                            <p>Subtotal</p>
                            <p>₹8800</p>
                        </div >
                        <div className='flex justify-between mt-3 w-[100%]'>
                            <p>Shipping</p>
                            <p>₹100</p>
                        </div>
                        <div className='flex justify-between mt-3 w-[100%]'>
                            <p>Shipping discount</p>
                            
                            <p>-₹100</p>
                            
                        </div>
                        <div className='flex justify-between mt-3 w-[100%] text-3xl font-bold'>
                            <p>total</p>
                            <p>₹8800</p>
                        </div>

                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />

        </div>
    )
}

export default CartPage