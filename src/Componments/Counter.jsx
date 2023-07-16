import React from 'react'

function Counter() {
    return (
        <div>
            <div className='flex items-center justify-center text-2xl'>
                Quantity
                <div className='ml-5 shadow-md flex'>
                    <div className='bg-blue-600 items-center justify-center w-8 flex cursor-pointer rounded-l-md'>-</div>
                    <div className='w-8 flex items-center justify-center border-[1px]'>1</div>
                    <div className='bg-blue-600 items-center justify-center w-8 flex cursor-pointer rounded-r-md'>+</div>
                </div>
            </div>

        </div>
    )
}

export default Counter