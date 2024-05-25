import { useEffect, useState } from "react";
import SingleNewPro from "./SingleNewPro";
import { Link } from "react-router-dom";


const NewProduct = () => {
    const [newProducts,setNewProduct]=useState([])
    useEffect(()=>{
        fetch('NewPro.json')
        .then(res=>res.json())
        .then(data=>setNewProduct(data))
    },[])
    return (
        <div className='mt-10'>
           <div className='flex justify-between'>
           <h1>New Product:</h1>
           <Link to='newproductview'>View All</Link>
           </div>
           <div className='grid md:grid-cols-4 grid-cols-2 gap-5'>
            {
                newProducts.map(newProduct=><SingleNewPro key={newProduct.id} newProduct={newProduct}></SingleNewPro>)
            }
            </div> 
        </div>
    );
};

export default NewProduct;