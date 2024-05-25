import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const SinglePro = ({ feature }) => {
    const { title, img, price } = feature
    return (
        <div className="m-3">
            <div className="card border border-blue-300 relative  bg-base-100 shadow-xl">
                <figure className="">
                    <img src={img} alt="Featured Product" className="rounded-xl w-80 h-60" />
                    <button className="btn absolute w-12 h-10 right-0 top-0 bg-orange-500 rounded-full  text-white ">20%</button>
                </figure>
                <div className="join join-vertical absolute  w-12 top-5 bottom-0 ml-1">
                    <h1 className="btn text-xl"><FaRegHeart /></h1>
                    <h1 className="btn text-xl"><IoCartOutline /></h1>
                </div>
                <div className=" items-center text-center  ">
                    <h2 className="font-semibold text-xl">{title}</h2>
                    <p className='text-orange-500 font-semibold '>Price:${price}</p>
                    <h1 className=' text-center mt-3 mb-2'><button className="btn bg-black rounded-2xl text-white w-40">Buy Now</button></h1>
                </div>
            </div>
        </div>
    );
};

export default SinglePro;