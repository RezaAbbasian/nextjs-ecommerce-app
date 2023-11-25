import Category from '../../components/Category'
import Layout from '../../components/Layouts'
import categoriesItems from '../../data/categories.js'
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductCategory({categories}){

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   // آدرس API خارجی را در اینجا قرار دهید
    //   const apiUrl = `${process.env.API_URL}categories`;
      
    //   // فراخوانی API با استفاده از axios
    //   axios.get(apiUrl)
    //     .then((response) => {
    //       setData(response.data);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching data from API:', error);
    //     });
    // }, []);

return(
<Layout title='Categories Page'>
    <div className='grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4'>
    {categories.map((cItem) =>(
        <Category item={cItem} key={cItem.slug}></Category>
    ))}
    </div>
</Layout>
)
}

export async function getServerSideProps(){

  const res = await fetch(`${process.env.API_URL}categories`)
  const categories = await res.json()

  return { props: { categories } }
}

export default ProductCategory