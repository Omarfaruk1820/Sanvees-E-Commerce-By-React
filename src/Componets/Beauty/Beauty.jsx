import { Link } from "react-router-dom";
import BeautyLeft from "./BeautyLeft";
import BeautyRight from "./BeautyRight";


const Beauty = () => {
    return (
        <div className='mt-10'>
            <div className='flex justify-between mx-4'>
                <h1>Beauty</h1>
                <Link to='ViewAllBeauty'>View All</Link>
            </div>
            <div className='grid md:grid-cols-5 grid-cols-1 gap-2'>
                <div className="col-span-1 ml-2">
                    <BeautyLeft></BeautyLeft>
                </div>

                <div className='col-span-4 mx-4 '>
                    <BeautyRight></BeautyRight>
                </div>
            </div>
        </div>
    );
};

export default Beauty;