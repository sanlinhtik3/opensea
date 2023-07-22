// some-inner-component.jsx
import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { BeakerIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'


export function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()} className=' w-14 h-14 bg-slate-50 rounded-full border-slate-100 flex justify-center items-center absolute -left-5 top-[40%] z-10 lg:left-10'>
      <ChevronLeftIcon className="h-6 w-6" />
    </button>
  );
}

export function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()} className=' w-14 h-14 bg-slate-50 rounded-full border-slate-100 flex justify-center items-center absolute -right-5 top-[40%] z-10 lg:right-10'>
      <ChevronRightIcon className="h-6 w-6" />
    </button>
  );
}