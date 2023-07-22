import React from 'react'

const SlideCard = ({data}) => {
    return (
        <>
            <div className=" space-y-5">
                <img className=' aspect-square rounded-xl object-cover' src={data?.img} alt="" />
                <h5 class="text-xl font-bold dark:text-white">{data?.title}</h5>
            </div>
        </>
    )
}

export default SlideCard