import { useEffect, useState } from "react";
import SingleBeauty from "./SingleBeauty";


const BeautyRight = () => {
const [beautes,setBeautes]=useState([])
useEffect(()=>{
    fetch('Beauty.json')
    .then(res=>res.json())
    .then(data=>setBeautes(data))
},[])
    return (
        <div>
          
          <div className='grid md:grid-cols-4 grid-cols-2 gap-3'>
            {
beautes.map(beauty=> <SingleBeauty key={beauty.id} beauty={beauty}></SingleBeauty>)
            }
          </div>
        </div>
    );
};

export default BeautyRight;