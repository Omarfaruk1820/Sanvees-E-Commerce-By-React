import { useEffect, useState } from "react";
import SinglePro from "./SinglePro";
import { Link } from "react-router-dom";

const FeaturedPro = () => {
    const [features,setfeatured]=useState([])
    useEffect(()=>{
        fetch('FeaturedPro.json')
        .then(res=>res.json())
        .then(data=>setfeatured(data))
    },[])
    return (
        <div className='mt-10'>
       <div className='flex justify-between mx-4'>
       <h1 className='text-2xl font-bold'>Featured Products:</h1>
        <h1><Link to='/newProduct' className='font-medium text-orange-500'>Vew All</Link></h1>
       </div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-3'>
            {
                features.map(feature=> <SinglePro key={feature.id} feature={feature}></SinglePro>)
            }
        </div>
        </div>
    );
};

export default FeaturedPro;