
import { Link } from "react-router-dom";
import FlashLeft from "./FlashLeft";
import FlashSaleRight from "./FlashSaleRight";


const FlashSale = () => {
    return (
        <div className='mt-10'>
            <div className='flex justify-between'>
                <h1 className='text-3xl font-semibold'>Flash Sale:</h1>
                <Link className='text-xl text-orange-500' to='flashSaleView'>View All</Link>
            </div>
            <div className='grid md:grid-cols-8 mt-5 gap-2'>
          <div className="col-span-3">
                <FlashLeft></FlashLeft>
            </div>
            <div className='col-span-5'>
                <FlashSaleRight></FlashSaleRight>
            </div>
            
        </div>
        </div>
    );
};

export default FlashSale;