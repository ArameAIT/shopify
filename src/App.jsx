import React from 'react'
import { useSelector } from 'react-redux'
import { selectProducts } from './store/Slices/MainSlice'
import Product from './Components/Product';

function App() {
  const products = useSelector(selectProducts)

  return (
    <div className='flex justify-around'>
      {
        products.map((el) => {
          return (
            <div key={el.id}>
              <Product id={el.id}
                count={el.count}
                photo={el.photo}
                about={el.about}
                basketCount={el.basketCount}
                price={el.price}
                initialCount={el.initialCount} />

            </div>
          )

        })
      }
    </div>
  )
}

export default App