import Link from "next/link"
import Image from "next/image"

function CatFront({item}){
return(
<div className="mt-2 mb-2">
    <Link 
    href={`/product-tag/${item.slug}`}
    >
    <Image 
    className=" inline-block h-3 w-3 rounded-xl shadow-xl"
    src={item.image}
    width={100}
    height={100}
    alt={item.title}
    />
    </Link>
    <div 
    className="flex flex-col items-center justify-center mt-4 mb-4">
    <Link href={`/product-tag/${item.slug}`}>
    <h2 className="text-sm font-bold">
        {item.title}
    </h2>
    </Link>
    </div>
</div>
)
}

export default CatFront