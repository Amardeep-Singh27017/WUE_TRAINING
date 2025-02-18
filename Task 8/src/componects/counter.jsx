import React, { useState } from 'react'
import './counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (

        <div className='main_container'>
            <div className='count'>
                <h2>Simple Counter App</h2>
                <div id="dis_count">
                    <span id='dis_count'>{count}</span>
                </div>
                <div>
                    <button onClick={() => { setCount(count - 1) }} id="btn">-</button>
                    <button onClick={() => { setCount(count + 1) }} id="btn">+</button>
                </div>
            </div>
        </div>
    )
}

export default Counter

