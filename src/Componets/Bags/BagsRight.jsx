import { useEffect, useState } from "react";
import SingleBags from "./SingleBags";


const BagsRight = () => {
    const [bags,setBags]=useState([])
    useEffect(()=>{
        fetch('Bags.json')
        .then(res=>res.json())
        .then(data=>setBags(data))
    },[])
    return (
        <div>
           
           <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
            {
                bags.map(bag=><SingleBags key={bag.id} bag={bag}></SingleBags>)
            }
            </div> 
        </div>
    );
};

export default BagsRight;