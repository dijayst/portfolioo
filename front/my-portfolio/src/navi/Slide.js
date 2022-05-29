import React from 'react'
import nab from './nab.jpg';
import weather from './weather.PNG';

const Slide = ({moveslide,direction}) => {
    return (
        <div>
            <button onClick={moveslide} className={direction==="next"? "btn-slidenext":"btn-slideprev"}>
                <img src={direction==="next" ? nab : weather } alt="arrows" height="50px" width="50px" s/>
            </button>
        </div>
    )
}

export default Slide
