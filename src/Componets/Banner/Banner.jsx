import bag1 from "../../assets/bags/4595336.webp"
import bag2 from "../../assets/bags/R.jpeg"
import bag3 from "../../assets/bags/OIP.jpeg"

const Banner = () => {
    return (
        <div className='mt-3 mx-4'>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-3'>
            <div className='col-span-2 '>
                <img className='h-[350px] w-full' src={bag1} alt="" />
            </div>
            <div className='col-span-1'>
                <img className='w-full h-[350px] ' src={bag2} alt="" />
            </div>
            <div className='col-span-1'>
                <img className='w-full h-[350px]' src={bag3} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;