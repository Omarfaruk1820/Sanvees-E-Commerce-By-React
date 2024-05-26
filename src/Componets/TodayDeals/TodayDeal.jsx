import { useEffect, useState } from "react";
import SingleDeal from "./SingleDeal";
import { Link } from "react-router-dom";


const TodayDeal = () => {
    const [deals,setDeals]=useState([])
    useEffect(()=>{
        fetch('TodayDeal.json')
        .then(res=>res.json())
        .then(data=>setDeals(data))
    },[])
    return (
        <div className='mt-10'>
            <div className='flex justify-between mx-4'>
            <h1 className='text-3xl font-semibold'>Today Deals:</h1>
            <Link to='TodaydealView' className='font-medium text-orange-500'>View All</Link> 
            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-3'>
                {
                    deals.map(deal=> <SingleDeal key={deal.id} deal={deal}></SingleDeal>)
                }
            </div>
        </div>
    );
};

export default TodayDeal;