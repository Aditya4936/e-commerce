import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'

function Footer() {
    return (
        <div className='flex items-center justify-around p-2'>
            <div className='flex-1 flex flex-col p-2'>
                {/* store information */}
                <h1 className='text-[25px]'>
                    Aditya Vansdadiya
                </h1>
                <p>
                    My Name is Aditya Patel. I belongs Morbi It's City of Gujrat <br />
                    My 12th complated in Navyug Science School <br />
                    Now i am studing Computer Science in Marwadi collage which Located in Rajkot <br />
                </p>
                <div className='flex items-center justify-center mt-3 self-start' >
                    <div className='m-3 rounded-full p-2 cursor-pointer text-white bg-blue-800'>
                        <Facebook />
                    </div>
                    <div className='m-3 rounded-full p-2 cursor-pointer text-white bg-red-500'>
                        <Instagram />
                    </div>
                    <div className='m-3 rounded-full p-2 cursor-pointer text-white bg-sky-600'>
                        <Twitter />
                    </div>
                    <div className='m-3 rounded-full p-2 cursor-pointer text-white bg-red-600'>
                        <Pinterest />
                    </div>
                </div>

            </div>
            <div className='flex-1 flex flex-col p-2'>
                <div className='flex m-3'>
                    <LocationOnOutlined />
                    <p className='pl-3'>Morbi-Gujrat</p>
                </div>
                <div className='flex m-3' >
                    <LocalPhoneOutlined />
                    <p className='pl-3'>+91 8780589863</p>
                </div>
                <div className='flex m-3'>
                    <EmailOutlined />
                    <p className='pl-3'>6984akv@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer