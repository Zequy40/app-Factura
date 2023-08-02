import Header from './components/header'
import Product from './components/product'
import Carts from './components/carts';
import {products} from '@/app/mocks/product.json';



export default function Home() {
  return (
    <>
      <Header products={products}/>
     <Carts/>
      <Product products={products}/>

     
     
    </>
  )
}