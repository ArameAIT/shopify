import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { selectProducts } from '../store/Slices/MainSlice';

function Header() {
    const products = useSelector(selectProducts)
    const product = products.filter(el => el.basketCount > 0).length

    return (
        <div className='w-full flex justify-between items-center p-[50px]'>
            <div className='w-[100px] '>
                <Link to={""}>
                    <img src="/shopify.png" />
                </Link>
            </div>
            <div className='w-[90px]'>
                <Link to={"/basket"}>
                    <img src="/basket.png" />
                </Link>
                Products : {product}
            </div>
        </div>
    )
}

export default Header