import { products } from '@/app/mocks/product.json';
import Link from 'next/link';


const Page = ({ params }) => {
  const categoryColors = {
    Tortillas: 'bg-blue-500 text-white',
    Menu: 'bg-orange-400 text-white',
    Picar: 'bg-red-500 text-white',
    Pollos: ' bg-yellow-700 text-white',
    Bolsa: 'bg-white text-black'
  };
  const { id } = params;
  const idAsNumber = parseInt(id, 10);

  // Filtrar el producto con el ID correspondiente
  const filteredProduct = products.filter(product => product.id === idAsNumber);

  // Si el producto no se encuentra, puedes mostrar un mensaje o hacer lo que consideres adecuado.
  if (filteredProduct.length === 0) {
    return <div>El producto con ID {id} no fue encontrado.</div>;
  }

  const product = filteredProduct[0];

  return (
    <>
      <div className="max-w-[760px] w-full h-[100vh] bg-gray-700 flex items-center justify-center">
        <div className="flex flex-col gap-2 p-16 rounded-xl bg-gray-300 relative" >
        <Link href={'/'} className="flex items-center justify-center border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 absolute w-12 h-12 top-1 left-1 rounded-full">X</Link>
          <div className={`flex items-center justify-center p-4 rounded-lg text-center font-semibold uppercase ${categoryColors[product.category]}`}>{product.category}</div>
          <div className="flex gap-4">
            <div className="w-full text-lg p-1">{product.title}:</div>
            <div className="flex justify-center items-center text-white">
              <div className="card-text text-center text-black">{product.price}€</div>
              

            </div>
            
          </div>
          <div className="flex flex-col mb-8">
          <div className="text-xs">Descripción:</div>
          <div className="text-md">{product.description}</div>
          </div>
        
        </div>

      </div>



    </>

  )
}

export default Page
