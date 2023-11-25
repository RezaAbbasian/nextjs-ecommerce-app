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

function ProductPage(props){
    const [selectedVariation, setSelectedVariation] = useState(null);

    // Handle variation selection
    const handleVariationSelect = (variation) => {
      setSelectedVariation(variation);
    };
    
    const product = props.product
    const {state,dispatch} = useContext(Store)
    const router = useRouter()
    // const {query} = useRouter()
    // const {slug} = query
    
    console.log(product.variations);
    // const product = products.find((pItem)=> pItem.slug === slug)
    // if(!product){
    //     return <div>Product not found</div>
    // }

    function addToCartHandler() {
        const existingItem = state.cart.cartItems.find(
            (item) => item.slug === product.slug
        )
        
        const qty = existingItem ? existingItem.qty + 1 : 1

        if(product.inventory < qty){
            alert("product is out")
            return
        }
        dispatch({type: 'ADD_TO_CART', payload: {...product, qty}})
        toast.success('محصول به سبد خرید اضافه شد')
        // router.push('/cart')
    }

    return (
        <>
        <Layout title={product.title}>
            <div className="grid md:grid-cols-3 md-gap-3 bg-white rounded-xl p-10">
                <div className="md:cols-span-2">
                    <Image
                    className="rounded-xl"
                    src={product.image}
                    width={340}
                    height={340}
                    layout="responsive"
                    alt="product"
                    />
                </div>
                <div className="text-lg mr-5">
                    <h1 className="text-xl">{product.title}</h1>
                    <div className="mb-2 flex justify-between">
                    <p>برند</p>
                    {product.brand || ''}
                    </div>
                    <div className="mb-2 flex justify-between">
                    <p>دسته بندی</p>
                    <p>{product.categories.map((category) => category.title).join(', ')}</p>
                    </div>
                    <div className="mb-2 flex justify-between">
                    <p>برچسب ها</p>
                    <p>{product.tags.map((tag) => tag.title).join(', ')}</p>
                    </div>
                    <p>
                    {product.description}
                    </p>
                </div>


                <div className="mr-5">

                    <div className="mb-2 flex justify-between">
                        <div>قیمت:</div>
                        <div>{product.price}</div>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <div>موجودی</div>
                        <div>{product.inventory > 0 ? 'موجود است': 'اتمام موجودی'}</div>
                    </div>
                    <p>
                       سن      
                    <label className="m-3">
                    <select className="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                    <option value="option1">0</option>
                    <option value="option2">0 تا 3 ماه
                    </option>
                    <option value="option3">
                    3 تا 6 ماه
                    </option>
                    <option value="option3">
                    6 تا 9 ماه
                    </option>
                    <option value="option3">
                    9 تا 12 ماه
                    </option>
                    <option value="option3">
                    12 تا 18 ماه
                    </option>
                    <option value="option3">
                    18 تا 24 ماه
                    </option>
                    <option value="option3">
                    2 تا 3 سال
                    </option>
                    <option value="option3">
                    3 تا 4 سال
                    </option>
                        </select>
                        </label>
                    </p>
                    <p>
                       رنگ      
                    <label className="m-3">
                    <select className="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                    <option value="option1">زرد</option>
                    <option value="option2">
                        نارنجی
                    </option>
                    <option value="option3">
                    آبی
                    </option>
                    <option value="option3">
                    سبز
                    </option>
                    <option value="option3">
                    بنفش
                    </option>
                    <option value="option3">
                    صورتی
                    </option>
                    <option value="option3">
                    قرمز
                    </option>
                    <option value="option3">
                    سفید
                    </option>
                    <option value="option3">
                    مشکی
                    </option>
                        </select>
                        </label>
                    </p>

                    <button
                    onClick={addToCartHandler}
                    className="rounded-xl bg-gray-700 text-white px-4 py-2 w-full">اضافه به سبد خرید</button>
                
                
                
                </div>

            </div>
            <ProductsSlider products={props.products} />


        </Layout>
        </>
    )
}























// function ProductPage(props){
//     console.log(props);
//         let {product} = props

//     return(
//         <>
//         <h1>test title</h1>
//         <p>test paragra</p>
//         <h1>{product.id}</h1>
//         </>
//     )
// }

  export async function getServerSideProps({ params }) {

        const pSlug = params.slug
        const a =  await
        fetch(`${process.env.API_URL}products`);
        const products = await a.json();
        const productSlug = products.find( (item) => item.slug == pSlug)
        const productId =  await
        fetch(`${process.env.API_URL}products/${productSlug.id}`);
        const product = await productId.json();

        console.log(product)

    return {
        props : {
            product, products
        }
    }
    }

export default ProductPage