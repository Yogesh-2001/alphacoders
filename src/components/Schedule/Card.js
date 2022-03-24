import React from 'react'
import './Card.css'
const Card = ({src1,src2 }) => {

    return (
        <>
            <div class="card" data-aos="flip-left">
                <div className='col-12 inner'>
                    <img src={src1} alt="Card image cap" />
                    <span>VS</span>
                    <img src={src2} alt="Card image cap" />
                </div>
                <footer className='w-100'>
                    <p>League</p>
                    <p>Little Park 22 December 2022</p>
                    <a href='#'>Learn more</a>
                </footer>

            </div>
        </>
    )
}

export default Card