import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleClick, selectProduct } from './store/Slices/BasketSlice';
import { selectProducts } from './store/Slices/MainSlice';
import BasketProduct from './Components/BasketProduct';


function Basket() {
    const products = useSelector(selectProducts)
    console.log(products);
    const product = products.filter(el => el.basketCount > 0)
      console.log(product);

    const dispatch = useDispatch()
    dispatch(handleClick({
        product
    }))

    const apranqner = useSelector(selectProduct)
    return (
        <div className='flex justify-around'>
          {
            apranqner.map((el)=>{
                return <BasketProduct key={el.id} id={el.id} count={el.count} photo={el.photo} about={el.about} basketCount={el.basketCount} price={el.price}/>

            })
          }
        </div>
    )
}

export default Basket