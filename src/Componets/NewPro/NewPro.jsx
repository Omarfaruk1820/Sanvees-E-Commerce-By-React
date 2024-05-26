import { Link } from "react-router-dom";
import logo from "../../assets/logo/404.gif"


const NewPro = () => {
    return (
        <div>
           <h1>Hello Khairul vhai </h1>
           <img src={logo} alt="logo" />
           <h1><Link to='/'>All Categories</Link></h1>
        </div>
    );
};

export default NewPro;