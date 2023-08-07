import React from 'react'

function BasketProduct(info) {
    return (
        <div className='flex flex-col flex-wrap gap-[10px] '>
            <div className=' flex border rounded-xl object-cover p-2 w-[230px]'>
                <img src={info.photo} alt={info.about} />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <p>{info.about}</p>
                </div>
                <div className='flex'>
                    <p className='mt-[5px]'>{info.basketCount}</p>
                </div>
            </div>
        </div>
    )

}

export default BasketProduct