import Image from "next/image"

function Brand({item}){
return(
    <div className="bg-white rounded-xl mb-5 block">
            <Image 
            className="rounded-t-xl" 
            src={item.image}
            width={300}
            height={300}
            alt="tag"
            />
    </div>
)
}

export default Brand