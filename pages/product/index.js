import ProductsFilter from '../../components/ProductsFilter'
import Product from '../../components/Product'
// import { getServerSideProps } from '../protected'

function Products({products,tags}){
return(
<ProductsFilter title="محصولات" tags={tags}>
  <div className='grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4'>
  {products.map((pItem) =>(
      <Product item={pItem} key={pItem.slug}></Product>
  ))}
  </div>
</ProductsFilter>
)
}


export async function getServerSideProps(){

  const ProductsRes = await fetch(`${process.env.API_URL}products`)
  const products = await ProductsRes.json()

  const tagsRes = await fetch(`${process.env.API_URL}tags`)
  const tags = await tagsRes.json()

  return { props: { products, tags } }
}

export default Products