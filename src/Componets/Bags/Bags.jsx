import { Link } from "react-router-dom";
import BagsRight from "./BagsRight";
import Bagsleft from "./Bagsleft";


const Bags = () => {
    return (
        <div className="mt-10">
            <div className="flex justify-between">
                <h1>Bags:</h1>
                <Link to='viewallbags' className='text-xl text-orange-500'>View All</Link>
            </div>
            <div className='grid md:grid-cols-5  grid-cols-2 gap-3'>
                <div className='col-span-1'>
                    <Bagsleft></Bagsleft>
                </div>
                <div className='col-span-4 '>
                    <BagsRight></BagsRight>
                </div>
            </div>
        </div>
    );
};

export default Bags;