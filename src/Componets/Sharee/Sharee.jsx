import { Link } from "react-router-dom";
import ShareeLeft from "./ShareeLeft";
import ShareeRight from "./ShareeRight";


const Sharee = () => {
    return (
        <div className='mt-10'>
            <div className='flex justify-between'>
                <h1>Sharee:</h1>
                <Link to='ShareeAllView' className='text-xl font-semibold'>View All</Link>
            </div>
            <div className="grid md:grid-cols-5 grid-cols-2 gap-3">
                <div className='col-span-1 border'>
                    <ShareeLeft></ShareeLeft>
                </div>
                <div className='col-span-4 border'>
                    <ShareeRight></ShareeRight>
                </div>
            </div>
        </div>
    );
};

export default Sharee;