import React from 'react'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navibar from '../components/Navbar'
import Background from '../components/Background'
import gallery15 from '../images/gallery15.jpeg'
import gallery16 from '../images/gallery16.jpeg'
import gallery14 from '../images/gallery14.jpeg'
import gallery8 from '../images/gallery8.jpeg'
import gallery11 from '../images/gallery11.jpeg'
import gallery9 from '../images/gallery9.jpeg'
import gallery4 from '../images/gallery4.jpeg'
import gallery21 from '../images/gallery13.jpeg'
import gallery6 from '../images/gallery6.jpeg'
import gallery12 from '../images/gallery12.jpeg'
import gallery19 from '../images/gallery19.jpeg'
import gallery18 from '../images/gallery18.jpeg'
import gallery3 from '../images/gallery3.jpeg'

export default function Gallery() {
    return (
        <div className='myGallery'>
            <Navibar />
            <Background />
            <Carousel pagename="GALLERY" text="GLIMPSES of EXERGY'23"/>
            <div className="container=" style={{ width: "100vw" }}>
                <div className="row w-100 p-2 m-0" >
                    <div className="col-3 p-2 m-0">
                        <div className="row p-2 m-0">
                            <div className="col p-2 m-0" style={{ width: "" }}>
                                <img src={gallery16} alt="" srcset="" className='w-100 h-100' />
                            </div>
                        </div>
                        <div className="row p-2 m-0">
                            <div className="col p-2 m-0">
                                <img src={gallery15} alt="" srcset="" className='w-100 h-100' />
                            </div>

                        </div>

                    </div>
                    <div className="col p-2 m-0">
                        <img src={gallery14} alt="" className='w-100 h-100' />
                    </div>
                    <div className="col-3 p-2 m-0">
                        <div className="row p-2 m-0">
                            <div className="col p-2 m-0">
                                <img src={gallery8} alt="" className='w-100 h-100' />
                            </div>
                        </div>
                        <div className="row p-2 m-0">
                            <div className="col p-2 m-0">
                                <img src={gallery11} alt="" className='w-100 h-100' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-0 p-2">
                    <div className="col-4 m-0 p-2">
                        <div className="row m-0 p-2">
                            <div className="col m-0 p-2">
                                <img src={gallery9} alt="" srcset="" className='w-100 h-100' />
                            </div>
                        </div>
                        <div className="row m-0 p-2">
                            <div className="col m-0 p-2">
                                <img src={gallery21} alt="" srcset="" className='w-100 h-100' />
                            </div>

                        </div>

                    </div>
                    <div className="col-8 m-0 p-2">
                        <img src={gallery4} alt="" srcset="" className='w-100 h-100' />
                    </div>
                </div>
                <div className="row m-0 p-2">
                    <div className="col m-0 p-2">
                        <img src={gallery6} alt="" srcset="" className='w-100 h-100' />
                    </div>
                    <div className="col-3 m-0 p-2">
                        <div className="row m-0 p-2">
                            <div className="col m-0 p-2">
                                <img src={gallery12} alt="" srcset="" className='w-100 h-100' />
                            </div>
                        </div>
                        <div className="row m-0 p-2">
                            <div className="col m-0 p-2">
                                <img src={gallery19} alt="" className='w-100 h-100' />
                            </div>
                        </div>

                    </div>
                    <div className="col-3 m-0 p-2">
                        <div className="row m-0 p-2">
                            <div className="col m-0 p-2">
                                <img src={gallery18} alt="" className='w-100 h-100'/>
                            </div>
                        </div>
                        <div className="row m-0 p-2">
                            <div className="col m-0 p-20">
                                <img src={gallery3} alt="" srcset=""  className='w-100 h-100'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

                </div>
            </div>

            <Footer />
        </div>
    )
}
