import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlide from '../components/ImageSlide'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />

            {/* Hero section */}
            <div className="max-w-screen-2xl lg:max-w-screen-xl mx-auto">
                <div className="grid md:grid-cols-2 lg:gap-20 py-20 justify-center items-center">
                    <div className="">
                        <div className="relative h-[600px]">
                            <img className='absolute w-20 left-10 top-20' src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/630418611a4321f4108ef8cc_Hero%20img-Sol.png" alt="" />
                            <img className='absolute w-16 right-0 top-10' src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/63041861c0d0e0cd2d52f039_Hero%20img-Klay.png" alt="" />
                            <img className='absolute w-64 bottom-40 left-16' src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/63041862db32f80bd94254b1_Hero%20img-CoolCat.png" alt="" />
                            <img className='absolute w-96 bottom-10 right-0' src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/63a0a7a3ac157f0f1035a92a_doodles_card-2.png" alt="" />
                            <img className='absolute w-40 left-40' src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/63041862db32f882f44254b0_Hero%20img-logo.png" alt="" />
                            <img className='absolute w-28 right-0  bottom-0' src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/630418625279de5b10573db7_Hero%20img-Eth%202.png" alt="" />
                            <img className='absolute w-12 left-[50%] bottom-10' src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/630418621a3106213adb593e_Hero%20img-Polygon.png" alt="" />
                        </div>
                    </div>
                    <div className="max-w-lg">
                        <h1 class="flex items-center text-5xl font-extrabold dark:text-white mb-5">
                            Your NFT journey starts here.
                        </h1>
                        <p className='mb-10'>
                            Guides, practical tips, and support articles for first-time creators, experienced collectors, and everyone in between.
                        </p>
                        <button type="button" class="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start Learning</button>
                    </div>
                </div>
            </div>

            {/* Meet OpenSea */}
            <div className="grid lg:grid-cols-4 max-w-screen-2xl mx-auto py-36 gap-3 px-5 md:px-0">
                <div className="col-span-1">
                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">Meet OpenSea</h1>
                    <p className=' text-gray-600'>
                        Allow us to introduce ourselves! Hear from our CEO, Devin Finzer, about who we are, how we started, and where we're headed.
                    </p>
                </div>
                <div className=" col-span-3">
                    <div className=" relative">
                        <video className='w-full rounded-2xl' src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/631785a5112ccf196594549b_OpenSea%20Short-transcode.mp4"></video>
                        <div className=" absolute bottom-5 left-5">
                            <button type="button" class="px-6 py-3.5 text-base font-medium text-black inline-flex items-center bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="w-4 h-4 text-black mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                </svg>
                                Extra large
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* =================================    Slide Show     ============================== */}
            <div className=" mb-20">
                <div className="max-w-screen-2xl mx-auto mb-10 px-5 md:px-0">
                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">NFT 101</h1>
                    <p className=' text-gray-600'>
                        Get comfortable with the basics.
                    </p>
                </div>
                <ImageSlide />
            </div>

            {/* =================================    Slide Show     ============================== */}
            <div className=" mb-20">
                <div className="max-w-screen-2xl mx-auto mb-10 px-5 md:px-0">
                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">Blockchain basics</h1>
                    <p className=' text-gray-600'>
                        Understand the technology behind cryptocurrency and NFTs.
                    </p>
                </div>
                <ImageSlide />
            </div>

            <Footer/>


        </>
    )
}

export default Home