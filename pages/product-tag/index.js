import Tag from '../../components/Tag'
import Layout from '../../components/Layouts'
import tagsItems from '../../data/tags.js'
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductTag({tags}){

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   // آدرس API خارجی را در اینجا قرار دهید
    //   const apiUrl = `${process.env.API_URL}tags`;
      
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
<Layout title='Tags Page'>
    <div className='grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4'>
    {tags.map((tItem) =>(
        <Tag item={tItem} key={tItem.slug}></Tag>
    ))}
    </div>
</Layout>
)
}



export async function getServerSideProps(){

  const res = await fetch(`${process.env.API_URL}tags`)
  const tags = await res.json()

  return { props: { tags } }
}

export default ProductTag