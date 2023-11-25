import { useRouter } from "next/router";
import tagItems from '../../data/tags.js'
import ProductsFilter from '../../components/ProductsFilter'
import Product from "../../components/Product.js";
import productItems from '../../data/products.js'

function TagPage({ tags }){
    const router = useRouter()
    const {query} = useRouter()
    const {slug} = query

    const tag = tags.find((tItem)=> tItem.slug === slug)

    if(!tag){
        return <div>Product not found</div>
    }
    return (
        <ProductsFilter title={tag.title} tags={tags}>
          <div className='grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4'>
          {tag.products.map((pItem) =>(
              <Product item={pItem} key={pItem.slug}></Product>
          ))}
          </div>
        </ProductsFilter>
    )
}

export async function getServerSideProps(){

    const res = await fetch(`${process.env.API_URL}tags`)
    const tags = await res.json()
    console.log(tags)
    return { props: { tags } }
  }

export default TagPage