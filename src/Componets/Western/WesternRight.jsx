import { useEffect, useState } from "react";
import SingleWestern from "./SingleWestern";


const WesternRight = () => {
    const [westerns, setWestern]=useState([])
    useEffect(()=>{
fetch('Western.json')
.then(res=>res.json())
.then(data=>setWestern(data))
    },[])
    return (
        <div>
           <h1>Western:{westerns.length}</h1>
           <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
            {
                westerns.map(western=> <SingleWestern key={western.id} western={western}></SingleWestern>)
            }
            </div> 
        </div>
    );
};

export default WesternRight;