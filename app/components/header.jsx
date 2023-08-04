'use client'
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '@/store/slice';
import { usePathname } from 'next/navigation';


function Header() {
 
  const router = usePathname();

  const isOpen = useSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();

  const handleCartToggle = () => {
    dispatch(toggleCart());
  }
  return (
    <>
      <div className='max-w-[760px] bg-gray-200 fixed w-full top-0 z-10'>
        <div className='w-full pb-4 pt-4 bg-gray-200 px-3'>
          <div className='flex justify-around mb-1 py-[2px]  bg-slate-500 rounded'>
            <Link href="./../category"><button className={router === '/category' || router === '/category/Pollos' || router === '/category/Picar' || router === '/category/Tortillas' || router === '/category/Menu' || router === '/category/Bolsa' ? 'p-2 capitalize bg-slate-200 rounded' : 'p-2 capitalize text-white'}>categoria</button></Link>
            <Link href="/"><button className={router === '/' ? 'p-2 capitalize bg-slate-200 rounded' : 'p-2 capitalize text-white'}>productos</button></Link>
            <button className='p-2 capitalize text-white' onClick={handleCartToggle}>compras</button>
          </div>
        </div>
        
      </div>
      
    </>
  );
}

export default Header;
