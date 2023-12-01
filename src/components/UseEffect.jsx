import React, { useState } from 'react'
import './UseContext.css'

const UseEffect = () => {
    const [hide, changeHide] = useState(true);

    function handleClick() {
        changeHide(!hide);
        alert("Content Button is clicked")
    }

    return (
        <div>
            {!hide && (
                <p className='Content'>
                    Poverty in India remains a major challenge despite overall reductions in the last several decades as its economy grows. According to an International Monetary Fund paper, extreme poverty, defined by the World Bank as living on US$1.9 or less in purchasing power parity (PPP) terms, in India was as low as 0.8% in 2019, and the country managed to keep it at that level in 2020 despite the unprecedented COVID-19 outbreak.
                </p>
            )}
            <button onClick={handleClick}>Content</button>
        </div>
    )
}

export default UseEffect
