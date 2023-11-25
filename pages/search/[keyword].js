import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { useContext } from "react";
import Layout from "../../components/Layouts";
import productItems from '../../data/products.js'
import {Store} from '../../context/Cart'
import ProductsSlider from "../../components/ProductsSlider";
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';

function SearchPage({ post }){
    // const [selectedVariation, setSelectedVariation] = useState(null);

    // Handle variation selection
    // const handleVariationSelect = (variation) => {
    //   setSelectedVariation(variation);
    // };
    
    // const {state,dispatch} = useContext(Store)
    // const router = useRouter()
    // const {query} = useRouter()
    // const {slug} = query
    




    return (
        <>
        <Layout>
            <h1>Search</h1>
        </Layout>
        </>
    )
}

//   export async function getStaticPaths({ params }) {

//         const keyword = params.keyword
//         const a =  await
//         fetch(`${process.env.API_URL}search/gray`);
//         const products = a.json();

//         // const productSlug = products.find( (item) => item.title == pSlug)
//         // const productId =  await
//         // fetch(`${process.env.API_URL}products/${productSlug.id}`);
//         // const product = await productId.json();

//         // console.log(products)

//     return {
//         props : {
//             products
//         }
//     }
//     }
       
      // This function gets called at build time
      export async function getStaticPaths() {
        // Call an external API endpoint to get posts
        const res = await fetch(`${process.env.API_URL}search/gray`);
        const posts = await res.json()
       
        // Get the paths we want to pre-render based on posts
        const paths = posts.map((post) => ({
          params: { id: post.id },
        }))
       
        // We'll pre-render only these paths at build time.
        // { fallback: false } means other routes should 404.
        return { paths, fallback: false }
      }
       
      // This also gets called at build time
      export async function getStaticProps({ params }) {
        // params contains the post `id`.
        // If the route is like /posts/1, then params.id is 1
        const res = await fetch(`https://.../posts/${params.id}`)
        const post = await res.json()
       
        // Pass post data to the page via props
        return { props: { post } }
      }
       

export default SearchPage