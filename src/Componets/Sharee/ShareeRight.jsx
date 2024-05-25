import { useEffect, useState } from "react";
import SingleSari from "./SingleSari";


const ShareeRight = () => {
    const [sharees, setSharees] = useState([])
    useEffect(() => {
        fetch('Sari.json')
            .then(res => res.json())
            .then(data => setSharees(data))
    }, [])
    return (
        <div>

            <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                {
                    sharees.map(sharee => <SingleSari key={sharee.id} sharee={sharee}></SingleSari>)
                }
            </div>
        </div>
    );
};

export default ShareeRight;