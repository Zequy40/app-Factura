'use client'
import { Fragment, useMemo, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';
import { returnProduct, saveProduct, toggleCart } from '@/store/slice';
import { useRouter } from 'next/navigation'
import Cart from './../styles/Cart.module.css'


export default function Example() {
    const isOpen = useSelector((state) => state.cart.isOpen)
    const dispatch = useDispatch()

    const cart = useSelector(state => state.misCompras.myCart)
    const dispatchCart = useDispatch()

    const handleCloseCart = () => {
        dispatch(toggleCart()); // Despachar la acción toggleCart para cerrar el carrito
    }

    const [total, setTotal] = useState(0)

    const totalCart = useMemo(() => setTotal(cart.reduce((acumulador, valorActual) => acumulador + valorActual.price * valorActual.quantity, 0)), [cart])

    const eliminar = (product) => {
        dispatch(returnProduct(product))
    }
    const HandleVaciarCart = () => {
        dispatch(saveProduct())
    }
    const router = useRouter()

    const HandleFinalizarCompra = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        dispatch(saveProduct())
        handleCloseCart()
        router.push('/factura')
    }

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleCloseCart}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className={Cart.dialog} />
                </Transition.Child>

                <div className={Cart.div}>
                    <div className={Cart.contain}>
                        <div className={Cart.container}>
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className={Cart.panel}>
                                    <div className={Cart.panelDiv}>
                                        <div className={Cart.div2}>
                                            <div className={Cart.div3}>
                                                <Dialog.Title className={Cart.title}>Shopping cart</Dialog.Title>
                                                <div className={Cart.divTitle}>
                                                    <button
                                                        type="button"
                                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() => handleCloseCart()}
                                                    >
                                                        <span className="absolute -inset-0.5" />
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                        {cart.length > 0 ?
                                                            (cart.map((valor, indice) => (
                                                                <li key={indice} className="flex py-6">


                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                <h3>
                                                                                    <Link href={`/products/${valor.id}`}>{valor.category}</Link>
                                                                                </h3>
                                                                                <p className="ml-4">{valor.price}€</p>
                                                                            </div>
                                                                            <p className="mt-1 text-sm text-gray-500">{valor.title}</p>
                                                                        </div>
                                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                                            <p className="text-gray-500">Qty: {valor.quantity}</p>

                                                                            <div className="flex">
                                                                                <button
                                                                                    type="button"
                                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                                    onClick={() => eliminar(valor.id)}
                                                                                >
                                                                                    Eliminar
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )))
                                                            :
                                                            (<li className="flex py-6">No hay producto en el carrito</li>)
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>Total</p>
                                                <p>{total}€</p>
                                            </div>

                                            <div className="flex gap-4 mt-6">
                                                <button
                                                    onClick={()=>HandleFinalizarCompra()}
                                                    href="#"
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                >
                                                    finalizar compra
                                                </button>
                                            
                                                <button
                                                    onClick={()=>HandleVaciarCart()}
                                                    href="#"
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700"
                                                >
                                                    vaciar carrito
                                                </button>
                                            </div>
                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    o&nbsp;
                                                    <button
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                        onClick={handleCloseCart}
                                                    >
                                                        Seguir Comprando
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
