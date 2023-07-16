import { Close } from '@material-ui/icons'
import {React, useState } from 'react'

function Announce() {
    const [announceStyle, setAnnounceStyle] = useState('bg-[blue] font-bold text-white flex items-center justify-center')

        const handleClose = ()=>{
            setAnnounceStyle(announceStyle + " hidden")
        }

    return (
        <div className={announceStyle}>
            <h2>
                Huury up its discount</h2>
            <Close className='cursor-pointer' onClick={handleClose} />
        </div>

    )
}

export default Announce;