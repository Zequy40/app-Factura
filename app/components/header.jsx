'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '@/store/slice';


function Header({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    // Filtrar productos según el término de búsqueda
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(searchTerm ? filteredProducts : []);
  };

  const displayedProducts = searchTerm ? filteredProducts : products;

  const isOpen = useSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();

  const handleCartToggle = () => {
    dispatch(toggleCart());
  }
  return (
    <>
      <div className='max-w-[760px] bg-gray-200 '>
        <div className='w-full pb-4 pt-4 bg-gray-200 px-3'>
          <div className='flex justify-around mb-1 py-[2px]  bg-slate-500 rounded'>
            <button className='p-2 capitalize text-white'>categoria</button>
            <button className='p-2 capitalize bg-slate-200 rounded'>productos</button>
            <button className='p-2 capitalize text-white' onClick={handleCartToggle}>compras</button>
          </div>
        </div>
        <div className='flex justify-between w-full px-2 pb-4 mt-3 items-center border-y-[1px] border-gray-400 pt-5'>
          <div className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='w-4' viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input
              type="text"
              placeholder='Buscar'
              className='bg-gray-200'
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='w-5' viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      </div>
      {/* Mostrar resultados filtrados */}
      {filteredProducts.length > 0 && (
        <div>
          <h2>Resultados:</h2>
          <ul>
          {displayedProducts.map((product) => (
              <li key={product.id}>
                <Link href={`/products/${product.id}`}>{product.title}</Link></li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
