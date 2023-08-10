import React from 'react'

function BasketProduct(info) {
    const finalPrice = info.basketCount * info.price
    return (
        <div className='flex flex-col flex-wrap gap-[10px] '>
            <div className=' flex border rounded-xl object-cover p-2 w-[230px]'>
                <img src={info.photo} alt={info.about} />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <p>{info.about}</p>
                </div>
                <div className='flex gap-[10px]'>
                    <p className='mt-[5px]'>{info.basketCount}</p>
                    <p className='mt-[5px]'>*</p>
                    <p className='mt-[5px]'>{info.price}$</p>
                    <p className='mt-[5px]'>=</p>
                    <p className='mt-[5px]'>{finalPrice}$</p>
                </div>
            </div>
        </div>
    )

}

export default BasketProduct