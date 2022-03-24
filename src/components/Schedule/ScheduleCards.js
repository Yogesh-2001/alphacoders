import React from 'react'
import Card from './Card'
import './Card.css'
const ScheduleCards = () => {
    const cardsImg = [
        {
            src1: 'https://yt3.ggpht.com/ytc/AKedOLSUVdCLLVCeY9sPVTwI0TqcCmHMivFtotMR1VyrZg=s900-c-k-c0x00ffffff-no-rj',
            src2: 'https://static.toiimg.com/thumb/msid-90206708,width-1070,height-580,imgsize-29816,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
        },
        {
            src1: 'https://c.ndtvimg.com/2020-02/1r5vdst_rcb_625x300_14_February_20.jpg',
            src2: 'https://english.sakshi.com/sites/default/files/styles/canvas/public/article_images/2022/03/16/csklogo1-1647411289.jpg?itok=_c195PaH',
        },
        {
            src1: 'https://yt3.ggpht.com/ytc/AKedOLSUVdCLLVCeY9sPVTwI0TqcCmHMivFtotMR1VyrZg=s900-c-k-c0x00ffffff-no-rj',
            src2: 'https://static.toiimg.com/thumb/msid-90206708,width-1070,height-580,imgsize-29816,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
        },
        {
            src1: 'https://english.sakshi.com/sites/default/files/styles/canvas/public/article_images/2022/03/16/csklogo1-1647411289.jpg?itok=_c195PaH',
            src2: 'https://c.ndtvimg.com/2020-02/1r5vdst_rcb_625x300_14_February_20.jpg',
        }
    ]

    return (
        <>
            <section className='my-5 py-5' data-aos="fade-right" id='schedule' style={{ background: 'black', paddingBottom: '50px' }}>
                <h1 className='text-center mb-5' style={{ borderBottom: '3px solid red', width: 'fit-content', margin: 'auto', color: 'white' }}>Match Schedule</h1>
                <main className='outerCards'>
                    {
                        cardsImg.map((card) => (
                            <>
                                <Card src1={card.src1} src2={card.src2} />
                            </>
                        ))
                    }
                </main>
            </section>
        </>
    )
}

export default ScheduleCards