import { useEffect, useState } from "react";
import SingleDress from "./SingleDress";


const DressRight = () => {
    const [dresses,setDresses]=useState([])
    useEffect(()=>{
        fetch('Dress.json')
        .then(res=>res.json())
        .then(data=>setDresses(data))
    },[])
    return (
        <div>
         
           <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
            {
                dresses.map(dress=> <SingleDress key={dress.id} dress={dress}></SingleDress>)
            }
            </div> 
        </div>
    );
};

export default DressRight;