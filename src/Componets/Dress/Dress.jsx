import { Link } from "react-router-dom";
import DressLeft from "./DressLeft";
import DressRight from "./DressRight";


const Dress = () => {
    return (
        <div className='mt-10'>
            <div className='flex justify-between mx-4'>
                <h1 className='text-3xl font-semibold'>Dress:</h1>
                <Link to='dressViewAll' className='font-medium text-orange-500'>View All</Link>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-2'>
                <div className='col-span-1 ml-4 border border-green-300 rounded-xl shadow-lg'>
                    <DressLeft></DressLeft>
                </div>
                <div className='col-span-3 '>
                    <DressRight></DressRight>
                </div>
            </div>
        </div>
    );
};

export default Dress;