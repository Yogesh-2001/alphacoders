import React from 'react'
import './news.css'
const LatestCard = ({src,title}) => {
  return (
    <>
        <section className='latestCard' data-aos="zoom-in-down">
            <img className='col-5' src={src}/>
            <div className='col-7 right'>
                <h4>{title}</h4>
                <span>February 14, 2022</span>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem deleniti maiores, quae sapiente vel assumenda rem quo, quisquam soluta incidunt consequatur quas neque nostrum, qui labore voluptates libero aspernatur totam sit. Distinctio expedita dignissimos itaque dolor excepturi consectetur et!

                </p>
                <button type="button" class="btn btn-dark">Read more</button>
            </div>
        </section>
    </>
  )
}

export default LatestCard