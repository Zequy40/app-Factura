import { products } from '@/app/mocks/product.json';
import Link from 'next/link';

export default function Category() {
    // Crear un conjunto de categorías únicas utilizando el método Set
    const uniqueCategories = new Set(products.map(product => product.category));

    // Convertir el conjunto de categorías únicas en un array
    const categoriesArray = [...uniqueCategories];

    const categoryColors = {
        Tortillas: 'bg-blue-500 text-white',
        Menu: 'bg-orange-400 text-white',
        Picar: 'bg-red-500 text-white',
        Pollos: ' bg-yellow-700 text-white',
        Bolsa: 'bg-white text-black'
      };

    return (
        <>
            <div className="max-w-[760px] w-full bg-gray-200 py-7">
                <div className="grid grid-cols-2  place-items-center gap-16 mx-1" >
                    {categoriesArray.map(category => (
                        <div key={category}>
                            <Link href={`/category/${category}`} className={` bg-slate-600 rounded-lg p-6 text-center font-semibold uppercase ${categoryColors[category]}`}>{category}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

