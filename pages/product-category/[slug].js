import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../components/Layouts";
import categoryItems from '../../data/categories.js'
import ProductsFilter from "../../components/ProductsFilter";
import Product from "../../components/Product";

function CategoryPage({categories, tags}){
    const router = useRouter()
    const {query} = useRouter()
    const {slug} = query

    const category = categories.find((cItem)=> cItem.slug === slug)
    
    if(!category){
        return <div>Product not found</div>
    }
    
    return (
        <ProductsFilter title={category.title} tags={tags}>
          <div className='grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4'>
          {category.products.map((pItem) =>(
              <Product item={pItem} key={pItem.slug}></Product>
          ))}
          </div>
        </ProductsFilter>
    )
}

export async function getServerSideProps(){

    const res = await fetch(`${process.env.API_URL}categories`)
    const categories = await res.json()

    const tagsRes = await fetch(`${process.env.API_URL}tags`)
    const tags = await tagsRes.json()

    return { props: { categories, tags } }
  }

export default CategoryPage