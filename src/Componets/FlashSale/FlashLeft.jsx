import couple from "../../assets/capule/cauple.jpeg"

const FlashLeft = () => {
    return (
        <div className='relative'>
           <img className=' h-[562px] rounded-xl' src={couple} alt="Couple" />
     <div className='absolute ml-10 top-2'>
     <div className=" grid grid-flow-col gap-3 text-center auto-cols-max">
  <div className="flex flex-col">
    <span className="countdown font-mono text-3xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-3xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-3xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-3xl">
      <span style={{"--value":14}}></span>
    </span>
    sec
  </div>
</div>
     </div>

        </div>
    );
};

export default FlashLeft;