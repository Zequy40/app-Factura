import { products } from '@/app/mocks/product.json';
import Link from 'next/link';

export default function Category() {
    // Crear un conjunto de categorías únicas utilizando el método Set
    const uniqueCategories = new Set(products.map(product => product.category));

    // Convertir el conjunto de categorías únicas en un array
    const categoriesArray = [...uniqueCategories];


    return (
        <>
            <div className="max-w-[760px] w-full bg-gray-200 py-7">
                <div className="flex flex-col m-2 bg-orange-300" >
                    {categoriesArray.map(category => (
                        <div key={category} >
                            <Link href={`/category/${category}`} className="p-10 flex items-center justify-center text-white border-b border-gray-300 text-center font-semibold uppercase" >{category}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

