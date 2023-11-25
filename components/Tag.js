import Link from "next/link"
import Image from "next/image"
function Tag({item}){
return(
    <div className="bg-white rounded-xl mb-5 block">
            <Link href={`/product-tag/${item.slug}`}>
            <Image 
            className="rounded-t-xl" 
            src={item.image}
            width={300}
            height={300}
            alt="tag"
            />
            </Link>
        <div className="flex flex-col items-center justify-center p-5">
            <Link href={`/product-tag/${item.slug}`}>
            <h2 className="text-lg">{item.title}</h2>
            </Link>
        </div>
    </div>
)
}

export default Tag