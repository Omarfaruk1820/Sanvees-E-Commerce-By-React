import WesternLeft from "./WesternLeft";
import WesternRight from "./WesternRight";


const Western = () => {
    return (
        <div>
            <div className='grid md:grid-cols-5 grid-cols-2 gap-3'>
                <div className="col-span-1">
<WesternLeft></WesternLeft>
                </div>
                <div className='col-span-4'>
<WesternRight></WesternRight>
                </div>
            </div>
        </div>
    );
};

export default Western;