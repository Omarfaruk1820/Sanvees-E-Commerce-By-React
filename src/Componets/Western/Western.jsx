import { Link } from "react-router-dom";
import WesternLeft from "./WesternLeft";
import WesternRight from "./WesternRight";


const Western = () => {
    return (
        <div>
            <div className='flex justify-between mx-4'>
                <h1 className='text-3xl font-semibold'>Western Collection:</h1>
                <Link to='WesternViewAll' className='text-xl text-orange-500'>View All</Link>
            </div>
            <div className='grid md:grid-cols-5 grid-cols-1 gap-3'>
                <div className="col-span-1 ml-4">
                    <WesternLeft></WesternLeft>
                </div>
                <div className='col-span-4'>
                    <WesternRight></WesternRight>
                </div>
            </div>
        </div>
    );
};

export default Western;