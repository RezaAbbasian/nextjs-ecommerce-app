import Link from "next/link"
import Image from "next/image"
import Countdown from 'react-countdown'

function Product({item}){
    if(item.sale){
        return(
<>
    <div className="rounded-xl mb-5 block bg-white">
        <div className="border-b-4 border-red-600 mb-2 text-red-500 text-right text-sm">
        <Countdown date={Date.now() + 100000000} />
        </div>
            <div>
        <Link href={`/product/${item.slug}`}>
        <Image 
        className="rounded-t-xl" 
        src={item.image}
        width={500}
        height={100}
        alt={'test'}
        />
        </Link>
            </div>
        <div className="flex flex-col items-center justify-center p-2">
            <Link href={`/product/${item.slug}`}>
            <h2 className="text-sm">{item.title}</h2>
            </Link>
            <bdi className="p-2 text-right text-sm">{item.sale} تومان</bdi>
            <del className="p-2 text-right text-sm">{item.price} تومان</del>
            {/* <button className="rounded-xl bg-gray-700 text-white px-4 py-2">Add to cart</button> */}
        </div>
    </div>
        </>
        )}

return(
<>
    <div className="bg-white rounded-xl block">
    <div className="mb-10 text-red-500 text-right">
        </div>
        <Link href={`/product/${item.slug}`}>
        <Image 
        className="rounded-t-xl" 
        src={item.image}
        width={500}
        height={100}
        alt={item.title}
        />
        </Link>
        <div className="flex flex-col items-center justify-center p-2  text-right">
            <Link href={`/product/${item.slug}`}>
            <h2 className="text-sm">{item.title}</h2>
            </Link>
            <bdi className="text-right text-sm">{item.price.toLocaleString()} تومان</bdi>
            {/* <button className="rounded-xl bg-gray-700 text-white px-4 py-2">Add to cart</button> */}
        </div>
    </div>
        </>
)}

export default Product