import { Link } from "react-router-dom";
import ShareeLeft from "./ShareeLeft";
import ShareeRight from "./ShareeRight";


const Sharee = () => {
    return (
        <div className='mt-10'>
            <div className='flex justify-between mx-4'>
                <h1 className='text-3xl font-semibold'>Sharee:</h1>
                <Link to='ShareeAllView' className='text-xl font-semibold'>View All</Link>
            </div>
            <div className="grid md:grid-cols-5 grid-cols-1 mx-4 gap-3">
                <div className='col-span-1'>
                    <ShareeLeft></ShareeLeft>
                </div>
                <div className='col-span-4'>
                    <ShareeRight></ShareeRight>
                </div>
            </div>
        </div>
    );
};

export default Sharee;