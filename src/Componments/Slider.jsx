// import { orange } from '@material-ui/core/colors';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { ApiSlides } from '../apifolder/SliderApi'
import './Slides.css'


const Slider = () => {

    // useStates hooks
    const [slides] = useState(ApiSlides)
    const [activeSlide, setActiveSlide] = useState(0)


    //style
    const arrowStyle = "rounded-full bg-gray flex justify-center items-center shadow-sm hover:cursor-pointer";
    const nextSlide = () => {
        if (activeSlide === slides.length - 1) {
            setActiveSlide(0)
        }
        else {
            setActiveSlide(activeSlide + 1)
        }
    }
    const prvSlide = () => {
        if (activeSlide === slides.length - 1) {
            setActiveSlide(0)
        }
        else {
            setActiveSlide(activeSlide - 1)
        }
    }

    return (

        <div className='parentDiv h-[540px] bg-white flex items-center justify-between mobile:hidden'>
            {/* leftarrow div */}
            <div className={arrowStyle}>
                <ArrowLeftOutlined style={{ fontSize: '50px' }} onClick={prvSlide} />
            </div>
            {/* slide div */}
            {slides.map((slide, index) => {
                if (index === activeSlide) {
                    return (<div className={`wrapper flex w-[100%] h-[500px] items-center shadow-2xl justify-center  rounded-lg border-white border-10px
            overflow-hidden relative border-10px `+ slide.background} >

                        <div className='slide flex items-center justify-center h-[100%]'>

                            <div className='forImage flex justify-center items-center h-[100%]'>

                                <img className="h-[100%] object-cover" src={slide.src} alt="slide_image" />
                            </div>
                            <div className='des flex flex-col flex-1 place-items-start justify-center -ml-11'>
                                <h2 className='text-[55px]'>{slide.contant.h2}</h2>
                                <p className='text-[30px]'>{slide.contant.p}</p>
                                <button className='btn'>Shop Now</button>
                            </div>
                        </div>


                    </div>)
                }
            })}


            {/* right div */}
            <div className={arrowStyle}>
                <ArrowRightOutlined style={{ fontSize: '50px' }} onClick={nextSlide} />
            </div>
        </div>
    )
}

export default Slider