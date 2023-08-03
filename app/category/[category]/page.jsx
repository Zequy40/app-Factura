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
            
                <div className="max-w-[760px] w-full bg-gray-200 my-7">
                    
                    <div className="grid grid-cols-2 place-items-center gap-3 mx-2 my-6" >
                        {filteredProduct.map((productCategory) =>
                            <button onClick={() => buy(productCategory)} key={productCategory.id} className=' bg-slate-400 rounded-lg w-full'>

                                <div className={` bg-slate-600 rounded-lg text-center font-semibold uppercase ${categoryColors[productCategory.category]}`}>{productCategory.category}</div>
                                <div className="w-full p-1 text-center">{productCategory.title}</div>
                                <div className="flex flex-col  items-center text-white">
                                    <div className="card-text text-center text-black">{productCategory.price}€</div>
                                    <div className="text-xs">{productCategory.quantity}</div>
                                </div>

                            </button>
                        )}
                    </div>

                </div>
            
        </>

    )
}

export default CategoryProduct