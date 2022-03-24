import React from 'react'
import LatestCard from './LatestCard'
import './news.css'

const LatestNews = () => {
    return (
        <section className='outerSection col-md-12 mx-auto' id='news'>
            <h1 className='text-center mb-5' style={{ borderBottom: '3px solid red', width: 'fit-content', margin: 'auto' }}>Latest News & Updates</h1>
            <div className='row col-12'>
                <div className='col-9'>
                    <LatestCard title='Career Mode in WCC2 fulfills many a dream.' src='https://wcc1-website-assets.s3-ap-southeast-1.amazonaws.com/s3fs-public/styles/news_block/public/Games%20news/mycareeer.jpg?itok=cVg3TkCF' />
                    <LatestCard title='WCC3 expands its professional commentary desk.' src='https://wcc1-website-assets.s3-ap-southeast-1.amazonaws.com/s3fs-public/styles/news_block/public/Games%20news/blog3commentor-1.jpg?itok=qtWE8aRj' />
                    <LatestCard title="WCC3 RTG update – revealed in all its glory." src='https://wcc1-website-assets.s3-ap-southeast-1.amazonaws.com/s3fs-public/styles/news_block/public/Games%20news/road-to-glory-update-release.jpg?itok=hj6jgCL9' />
                </div>
                <div className='col-3 py-2'>
                    {
                        [1, 2].map(() => (
                            <>
                                <div class="col-12 my-4" style={{border:'1px solid white',borderRadius:'5px',padding:'10px 5px'}} data-aos="fade-left">
                                    <h6 className='d-flex justify-content-between m-0'><span>World Cricket Championship 3</span><span><i class="fa-brands fa-twitter"></i></span></h6>
                                    <a href='#'>@Worldcrickchamp</a>
                                    <p className='my-2' style={{fontSize:'12px'}}>WCC3's new, sensational NPL 2022 edition with amazing features
                                    <span><a href='#'>#thebestneverrest #WCC3 #NPL2022 #nextwave #Nextwavemultimedia</a></span></p>
                                    <img class="card-img-top my-2" src="https://store-images.s-microsoft.com/image/apps.58513.13510798886389436.0e6887b8-24ab-41ad-b74a-b6205492bfa0.4b00abee-305f-4690-8055-064a1cc47f64?mode=scale&q=90&h=400&w=800&background=%23000000" alt="Card image cap" />
                                    <h6 className='d-flex justify-content-between'><span><i class="fa-solid fa-heart mr-4"></i><i class="fa-solid fa-arrow-right-from-bracket"></i></span><span>9h</span></h6>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default LatestNews