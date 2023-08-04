'use client'
import { buyProduct } from '@/store/slice';
import {useSelector, useDispatch} from 'react-redux';



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
  title:product.title,
  price:product.price,
  quantity:1,
  category:product.category,
  id:product.id

 }))
 
} 

  return (
    <div className="max-w-[760px] w-full bg-gray-200 my-7">
      <div className="grid grid-cols-2 place-items-center gap-3 mx-1" >
        {
          products.map((product) => (
<button onClick={() => buy(product)} key={product.id} className="w-full p-1 bg-slate-400 rounded-lg mx-2 cursor-pointer active:scale-90">
            <div>
              <div className={` bg-slate-600 rounded-lg text-center font-semibold uppercase ${categoryColors[product.category]}`}>
                {product.category}
              </div>
              <div className="flex flex-col items-center text-white">
                <h5 className="text-xs">{product.title}</h5>
                <p className="text-sm text-center">{product.description}</p>
                <p className="card-text">{product.price}€</p>
                
              </div>
            </div>
</button>
          ))
        }
      </div>


    </div>
  )
}
