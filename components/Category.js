import Link from "next/link"
import Image from "next/image"
function Category({item}){
return(
    <div className="bg-white rounded-xl mb-5 block">
            <Link href={`/product-category/${item.slug}`}>
            <Image 
            className="rounded-t-xl" 
            src={item.image}
            width={500}
            height={500}
            alt="cats"
            />
            </Link>
        <div className="flex flex-col items-center justify-center p-5">
            <Link href={`/product-category/${item.slug}`}>
            <h2 className="text-lg">{item.title}</h2>
            </Link>
        </div>
    </div>
)
}

export default Category