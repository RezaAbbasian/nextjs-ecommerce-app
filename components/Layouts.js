import Head from "next/head"
import { useContext, useState, useEffect} from "react"
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Store} from '../context/Cart'
import Header from "./Header"
import Footer from "./Footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout({title, children}){
    const {state, dispatch} = useContext(Store)
    const {cart} = state

    const [cartItemsCount, setCartItemsCount] = useState(0)
    useEffect(()=> {
        setCartItemsCount(cart.cartItems.reduce((acc,cur) => acc+cur.qty,0)
        )
    }, [cart.cartItems])

return(
    <>
    <Head>
    <title>{`${title} - Babyshikshop`}</title>
    </Head>
    <ToastContainer position="bottom-left" limit={1} />
    <div className="flex min-h-screen flex-col justify-between">
        <Header></Header>
        {/* <div className='flex justify-center bg-gray-300 py-2 z-40 sticky w-full text-center'>
            <TextAnimate/>
        </div> */}
        <main className="container mt-5 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {children}
        <Footer></Footer>
            </main>

    </div>
    </>
)
}

export default Layout