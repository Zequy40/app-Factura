'use client'
import { useEffect, useState } from "react";
import Logo from '@/public/mcm.svg';
import Image from "next/image";
import { Rubik } from 'next/font/google'
import Link from "next/link";


const inter = Rubik({ weight: ['400', '600'], subsets: ['latin'] })



function Bill() {
    useEffect(() => {
        const item = localStorage.getItem("cart")
        const products = JSON.parse(item)
        if (products.length > 0) {
            setState(products)
        }
    }, [])
    const [state, setState] = useState([])
    const subtotal = state.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const tax = subtotal * 0.10
    const totalParcial = subtotal - tax
    const date = new Date()
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const handleGeneratePDF = () => {
        window.print();
    };

    console.log(state);


    return (
        <>
            <div className="m-4 p-4 max-w-[400px]">
                <div className="flex items-center justify center flex-col">
                    <Image src={Logo} alt="Logo los pollito mi compare migue" className="w-28"></Image>
                    <div className={`${inter.className} ${`text-center uppercase font-bold`}`}>LOS POLLITO MI COMPARE MIGUE</div>
                    <div className="text-center uppercase">EL PUERTO DE SANTA MARIA</div>
                    <div className="text-center uppercase">RONDA DE LAS DUNAS</div>
                    <div className="text-center uppercase">LOCAL 10, 11</div>
                    <div className="text-center uppercase">11500, SPAIN</div>
                    <div className="text-center uppercase">NIF: 48886345Y</div>
                    <div className="flex justify-between w-full border-y border-black mt-4">
                        <div className="flex justify-between gap-2">
                            <p className="font-extrabold">Cant.</p>
                            <p className="font-extrabold">Descripción</p>
                        </div>
                        <p className="font-extrabold">Precio Unitario</p>
                    </div>

                </div>
                {state.map((product) => (
                    <div className="flex justify-between w-full border-b border-gray-400 my-4 py-2" key={product.id}>
                        <div className="flex justify-between gap-2">
                            <p className="text-sm">{product.quantity}</p>
                            <p className="text-sm">{product.title}</p>
                        </div>
                        <p className="text-sm">{product.price} €</p>
                    </div>
                ))}

                <div className="flex flex-col gap-2 border-b border-gray-400">
                    <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p>{subtotal.toFixed(2)} €</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-lg font-bold uppercase">Total</p>
                        <p className="text-lg font-bold uppercase">{subtotal.toFixed(2)}€</p>
                    </div>
                </div>

                <div className="flex justify-between border-b border-gray-400 py-4">
                    <div>
                        <p className="text-md font-bold uppercase">Tasa</p>
                        <p>10%</p>
                    </div>
                    <div>
                        <p className="text-md font-bold uppercase">SIN IVA</p>
                        <p>{totalParcial.toFixed(2)} €</p>
                    </div>
                    <div>
                        <p className="text-md font-bold uppercase">IVA Inc.</p>
                        <p>{subtotal.toFixed(2)} €</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center my-10">
                    <p>{formattedDate}</p>
                    <p>FACTURA SIMPLIFICADA</p>
                </div>

                <div>Gracias por comprar en los pollito mi compare migue</div>
                <div className="flex justify-center gap-4 mt-4 print:hidden">
                    <button
                        className="bg-indigo-600 text-white py-2 px-4 rounded"
                        onClick={handleGeneratePDF}
                    >
                        Imprimir
                    </button>
                    <Link href={'/'} className="bg-green-600 text-white py-2 px-4 rounded">Volver</Link>
                </div>
            </div>
        </>
    )
}

export default Bill