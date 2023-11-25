import Link from "next/link"
import Image from "next/image"

function TagFront({item}){
return(
<div className="my-2">
    <Link 
    href={`/product-tag/${item.slug}`}
    >
    <Image 
    className="inline-block h-6 w-6 rounded-full ring-2 ring-red-600 hover:ring-4"
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

export default TagFront