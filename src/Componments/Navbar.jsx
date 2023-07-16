import React from 'react'
// import Link from 'react-router-dom'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { Link } from 'react-router-dom';
function Navbar() {
    const style = 'text-[14px] cursor-pointer ml-[25px] mobile:ml-[10px]';
    return (
        <div className='navbar h-[60px] shadow-md relative z-10'>
            <div className="wrapper pl-[20px] pr-[20] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
                {/* Left side */}
                <div className='left flex flex-1 items-center'>
                    <div className='language cursor-pointer text[15px] mobile:hidden'>Eng</div>
                    <div className='searchInput flex border-[2px] border-solid border-lighgrey rounded-md item-center ml-[10px] p-[5px] 
                        focus-within:border-blue-500 transition-all'>
                        <input  className='outline-none' type ='text' />
                        <Search className='cursor-pointer' style={{fontSize:"16px"}}/>
                    </div>
                </div>
{/* logo */}


                <div className='flex-1 center text-center '>
                    <div className='logo font-bold taxt-lg mobile:text-sm'>Summer Kings</div>
                </div>
{/* Right */}
                <div className='right flex flex-1 items-center justify-end mobile:flex-[2] mobile:justify-center '>
                    <div>
                    <Link  className={style} to="./Pages/RegisterPage.jsx">Register</Link>
                    {/* <div className={style} >Register</div> */}
                    </div>

                    {/* <div className={style}>Sign in </div> */}
                    <a  className={style} href="./Pages/LoginPage">Sign in</a>

                    <div className={style}></div>
                    <Badge badgeContent={2} color='primary' style={{cursor:'pointer'}} >
                        <ShoppingCartOutlined/>
                    </Badge>

                </div>


            </div>


        </div>
    )
}

export default Navbar
