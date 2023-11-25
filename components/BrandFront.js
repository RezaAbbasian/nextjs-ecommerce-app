import Link from "next/link"
import Image from "next/image"

function BrandFront({item}){
return(
<div className="mt-2 mb-2">
    <Image 
    className="inline-block h-3 w-5"
    src={item.image}
    width={100}
    height={100}
    alt={item.title}
    />
</div>
)
}

export default BrandFront