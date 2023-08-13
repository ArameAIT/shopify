import React, { useState } from 'react'
import { decreaseProductCount, increaseProductCount } from '../store/Slices/MainSlice';
import { useDispatch } from 'react-redux';

function Product(info) {
    const dispatch = useDispatch()


    const [initialCount] = useState(info.initialCount)
   

    function handleIncrease() {
        dispatch(increaseProductCount({
            id: info.id
        }))
    }

    function handleDecrease() {
        if (initialCount > info.count) {
            dispatch(decreaseProductCount({
                id: info.id
            }))
        }
    }

    return (
        <div className='flex flex-col flex-wrap gap-[10px] '>
            <div className=' flex border rounded-xl object-cover p-2 w-[230px]'>
                <img src={info.photo} alt={info.about} />
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
                <div>
                    <p>{info.about}</p>
                    <p>{info.price}$</p>
                </div>
                <div className='flex gap-[60px]'>
                    <button className='border border-black rounded-2xl p-[3px] w-[50px]' onClick={handleDecrease}>-</button>
                    <p className='mt-[5px]'>{info.count}</p>
                    <button className='border border-black rounded-2xl p-[5px] w-[40px]' onClick={handleIncrease}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Product