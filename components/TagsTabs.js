import { Tabs } from 'flowbite-react';
import ProductsSlider from './ProductsSlider';



function TagsTabs({products}){

    return (
      
<>


<Tabs aria-label="Pills" style="pills">
      <Tabs.Item active title="Tab 1">
      <ProductsSlider products={products} /> 
      </Tabs.Item>
      <Tabs.Item title="Tab 2">
      <ProductsSlider products={products} /> 
      </Tabs.Item>
      <Tabs.Item title="Tab 3">
      <ProductsSlider products={products} /> 
      </Tabs.Item>
      <Tabs.Item title="Tab 4">
      <ProductsSlider products={products} /> 
      </Tabs.Item>
      <Tabs.Item disabled title="Tab 5">
      <ProductsSlider products={products} /> 
      </Tabs.Item>
    </Tabs>



</>


    )}

export default TagsTabs