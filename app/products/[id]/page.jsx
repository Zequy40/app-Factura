import { products } from '@/app/mocks/product.json';


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
      <div className="max-w-[760px] w-full bg-gray-200 my-7">
        <div className="grid grid-cols-2 place-items-center gap-3 mx-1" >

          <div>
            <div className={` bg-slate-600 rounded-lg text-center font-semibold uppercase ${categoryColors[product.category]}`}>{product.category}</div>
            <div className="w-full p-1 bg-slate-400 rounded-lg">{product.title}</div>
            <div className="flex flex-col items-center text-white">
              <div className="card-text text-center text-black">{product.price}</div>
              <div className="text-xs">{product.quantity}</div>
            </div>
          </div>
        </div>

      </div>

    </>

  )
}

export default Page
