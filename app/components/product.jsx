'use client'
import { buyProduct } from '@/store/slice';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';



const categoryColors = {
  Tortillas: 'bg-blue-500 text-white',
  Menu: 'bg-orange-500 text-white',
  Picar: 'bg-amber-500 text-white',
  Pollos: ' bg-yellow-700 text-white',
  Bolsa: 'bg-white text-black'
};

export default function ProductList({ products }) {

  const [buttonPressTime, setButtonPressTime] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

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

  const handleButtonPress = (productId) => {
    // Obtener el tiempo actual en milisegundos
    const currentTime = new Date().getTime();
    // Guardar el tiempo en el estado
    setButtonPressTime(currentTime);
    setSelectedProductId(productId);
  };

  // Función para manejar el evento de soltar el botón
  const handleButtonRelease = () => {
    // Obtener el tiempo actual en milisegundos
    const currentTime = new Date().getTime();
    // Calcular la diferencia de tiempo en segundos
    const timeDifference = (currentTime - buttonPressTime);

    // Si el tiempo de pulsación es mayor o igual a 2 segundos, redirigir a otra página
    if (timeDifference >= 300) {
      // Reemplaza 'ruta' con la ruta de la página a la que quieres redirigir
      window.location.href = `/products/${selectedProductId}`;
      console.log('estoy pulsado');
    }
  };

  return (
    <div className="max-w-[760px] w-full bg-gray-200 mt-2">
      <div className="flex flex-col " >
        {
          products.map((product) => (
            <button 
            onClick={() => buy(product)} key={product.id} 
            className="w-full flex bg-slate-400 cursor-pointer active:scale-90 border-b border-black"
            >
            <div className={`flex items-center justify-start px-2 py-5 w-1/4 ${categoryColors[product.category]}`}>
             <div className="rounded-lg text-center font-semibold uppercase">
                    {product.category}
                  </div>
            </div>
              <div className='flex items-center justify-between px-2 py-5 w-3/4'
              onTouchStart={() => handleButtonPress(product.id)} 
            onTouchEnd={handleButtonRelease}
            onMouseDown={() => handleButtonPress(product.id)}
            onMouseUp={handleButtonRelease}>
                 
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
