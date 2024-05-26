import { useEffect, useState } from "react";
import SingleCategori from "./SingleCategori";
import { Link } from "react-router-dom";


const Categori = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('Categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className='mt-10'>
         <div className='flex justify-between mx-4'>
         <h1 className='text-2xl font-bold'>Categories of Product:</h1>
         <Link to='CategoriViewAll' className="font-medium text-orange-500">View All</Link>
         </div>
         <div className='grid md:grid-cols-6 grid-cols-2 gap-3 mt-3'>
            {
                categories.map(categori=> <SingleCategori key={categori.id} categori={categori}></SingleCategori>)
            }
            </div>  
        </div>
    );
};

export default Categori;