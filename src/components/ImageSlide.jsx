
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlideCard from './SlideCard';
import { SlideNextButton, SlidePrevButton } from './SlideButton';

const data = [
    {id: 1, img: 'https://assets-global.website-files.com/629a2d4e81096c5488a8a581/630e41b3f839ce4351b01ac5_What%20is%20an%20NFT.png', title: 'What is an NFT?'},
    {id: 2, img: 'https://assets-global.website-files.com/629a2d4e81096c5488a8a581/630e41a87b2a6a58eec6f15c_How%20to%20buy%20an%20NFT.png', title: 'How to buy an NFT?'},
    {id: 3, img: 'https://assets-global.website-files.com/629a2d4e81096c5488a8a581/637bb7b8e902642c9a7d3bc3_What%20are%20Nft%20Drops.png', title: 'How to buy an NFT?'},
    {id: 4, img: 'https://assets-global.website-files.com/629a2d4e81096c5488a8a581/6340b9ae4ce758590ca39ae5_HowToCreate_Landing.png', title: 'How to buy an NFT?'},
    {id: 5, img: 'https://assets-global.website-files.com/629a2d4e81096c5488a8a581/630e40a96187740f8a4fecc7_What%20is%20Minting.png', title: 'How to buy an NFT?'},
    {id: 6, img: 'https://assets-global.website-files.com/629a2d4e81096c5488a8a581/6478c790034e2a68b9cf6b25_What%20is%20a%20redeemable%20nft.png', title: 'How to buy an NFT?'},
    {id: 7, img: 'https://assets-global.website-files.com/629a2d4e81096c5488a8a581/63969f5511811781e117872f_Best%20practise%20for%20your%20OpenSea%20collection%20(1).png', title: 'How to buy an NFT?'},
]

const ImageSlide = () => {
    return (
        <>
            <div className=" mx-auto relative px-5 md:px-1">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    className="mySwiper"
                    spaceBetween={30}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    // centeredSlides={true}
                    loop={true}
                    grabCursor={true}
                    breakpoints={{
                        1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 1,
                          },
                        769: {
                          slidesPerView: 2,
                          slidesPerGroup: 2,
                        },
                        576: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                          },
                      }}
                // navigation
                // pagination={{ clickable: true }}
                >
                    {data?.map((data) => (
                        <SwiperSlide key={data.id}><SlideCard data={data} /></SwiperSlide>
                    ))}

                    <SlideNextButton />
                    <SlidePrevButton />
                </Swiper>
            </div>
        </>
    )
}

export default ImageSlide