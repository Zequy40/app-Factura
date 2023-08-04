import Header from './components/header'
import Product from './components/product'
import Carts from './components/carts';
import {products} from '@/app/mocks/product.json';
import Search from './components/search';



export default function Home() {
  return (
    <>
      <Header products={products}/>
      <div className='relative top-[5rem]'>
      <Search products={products}/>
     <Carts/>
      <Product products={products}/>
      </div>

     
     
    </>
  )
}