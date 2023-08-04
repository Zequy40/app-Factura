'use client'
import { buyProduct } from '@/store/slice';
import { useSelector, useDispatch } from 'react-redux';



const categoryColors = {
  Tortillas: 'bg-blue-500 text-white',
  Menu: 'bg-orange-500 text-white',
  Picar: 'bg-amber-500 text-white',
  Pollos: ' bg-yellow-700 text-white',
  Bolsa: 'bg-white text-black'
};

export default function ProductList({ products }) {

  const dispatch = useDispatch()
  const buy = (product) => {
    dispatch(buyProduct({
      title: product.title,
      price: product.price,
      quantity: 1,
      category: product.category,
      id: product.id

    }))

  }

  return (
    <div className="max-w-[760px] w-full bg-gray-200 mt-2">
      <div className="flex flex-col " >
        {
          products.map((product) => (
            <button onClick={() => buy(product)} key={product.id} className="w-full flex bg-slate-400 cursor-pointer active:scale-90 border-b border-black">
            <div className={`flex items-center justify-start px-2 py-5 w-1/4 ${categoryColors[product.category]}`}>
             <div className="rounded-lg text-center font-semibold uppercase">
                    {product.category}
                  </div>
            </div>
              <div className='flex items-center justify-between px-2 py-5 w-3/4'>
                 
                <h5 className="text-md font-bold text-white">{product.title}</h5>
                  
                  <p className="text-sm text-white">{product.price}€</p>
              </div>
            </button>
          ))
        }
      </div>


    </div>
  )
}
