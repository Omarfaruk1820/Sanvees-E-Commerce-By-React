import Bags from "../Bags/Bags";
import Banner from "../Banner/Banner";
import Beauty from "../Beauty/Beauty";
import Categori from "../Categories/Categori";
import Dress from "../Dress/Dress";
import FeaturedPro from "../FeaturedPro/FeaturedPro";
import FlashSale from "../FlashSale/FlashSale";
import NewProduct from "../NewProduct/NewProduct";
import Sharee from "../Sharee/Sharee";
import TodayDeal from "../TodayDeals/TodayDeal";
import Western from "../Western/Western";


const AllCategories = () => {
    return (
        <div>
            <Banner></Banner>
           <FeaturedPro></FeaturedPro>
           <TodayDeal></TodayDeal>
           <FlashSale></FlashSale>
           <NewProduct></NewProduct>
           <Categori></Categori>
           <Dress></Dress>
           <Beauty></Beauty>
           <Bags></Bags>
           <Sharee></Sharee>
           <Western></Western>
           
        </div>
    );
};

export default AllCategories;