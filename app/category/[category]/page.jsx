'use client'
import { products } from '@/app/mocks/product.json';
import Link from 'next/link';
import { buyProduct } from '@/store/slice';
import { useDispatch } from 'react-redux';
import Providers from '@/store/provider';
import Header from '@/app/components/header';


const CategoryProduct = ({ params }) => {
    const categoryColors = {
        Tortillas: 'bg-blue-500 text-white',
        Menu: 'bg-orange-400 text-white',
        Picar: 'bg-red-500 text-white',
        Pollos: ' bg-yellow-700 text-white',
        Bolsa: 'bg-white text-black'
    };
    const { category } = params;

    const dispatch = useDispatch()
    const buy = (product) => {
        dispatch(buyProduct({
            title: product.title,
            price: product.price,
            quantity: product.quantity,
            category: product.category,
            id: product.id

        }))
    }

    // Filtrar el producto con el ID correspondiente
    const filteredProduct = products.filter(product => product.category === category);

    return (
        <>
            
                <div className="max-w-[760px] w-full bg-gray-200 mt-2">
                    
                    <div className="flex flex-col" >
                        {filteredProduct.map((productCategory) =>
                            <button onClick={() => buy(productCategory)} key={productCategory.id} className=' w-full flex bg-slate-400 cursor-pointer active:scale-90 border-b border-black'>

                            <div className={`flex items-center justify-start px-2 py-5 w-1/4 ${categoryColors[productCategory.category]}`}>
             <div className="rounded-lg text-center font-semibold uppercase">
                    {productCategory.category}
                  </div>
            </div>
              <div className='flex items-center justify-between px-2 py-5 w-3/4'>
                 
                <h5 className="text-md font-bold text-white">{productCategory.title}</h5>
                  
                  <p className="text-sm text-white">{productCategory.price}€</p>
              </div>

                            </button>
                        )}
                    </div>

                </div>
            
        </>

    )
}

export default CategoryProduct