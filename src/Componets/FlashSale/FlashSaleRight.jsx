import { useEffect, useState } from "react";
import SingleSale from "./SingleSale";


const FlashSaleRight = () => {
    const [sales,setSale]=useState([])
    useEffect(()=>{
        fetch('Flash.json')
        .then(res=>res.json())
        .then(data=>setSale(data))
    },[])
    return (
        <div>
          
           <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
            {
                sales.map(sale=> <SingleSale key={sale.id} sale={sale}></SingleSale>)
            }
            </div> 
        </div>
    );
};

export default FlashSaleRight;