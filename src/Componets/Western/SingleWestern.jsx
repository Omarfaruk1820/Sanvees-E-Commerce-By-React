import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const SingleWestern = ({western}) => {
    const {title,img,price}=western;
    return (
        <div className='mx-4'>
            <div className="card border border-blue-300 relative  bg-base-100 shadow-xl">
        <figure className="">
            <img src={img} alt="Featured Product" className="rounded-xl w-72 h-60" />
            <button className="btn absolute w-12 h-10 top-0 right-0 bg-orange-500 rounded-full  text-white ">20%</button>
        </figure>
        <div className="join join-vertical absolute  w-12 top-0 mt-3 ml-3">
                <button className="btn text-xl"><FaRegHeart /></button>
                <button className="btn text-xl"><IoCartOutline /></button>
                 </div>
                 <div className=" items-center text-center  ">
            <h2 className="font-semibold text-xl">{title}</h2>
            <p className='text-orange-500 font-semibold '>Price:${price}</p>
            
              
               <h1 className='text-center mt-3 mb-2'><button className="btn bg-black rounded-2xl text-white w-40">Buy Now</button></h1>
               </div>
    </div>
        </div>
    );
};

export default SingleWestern;