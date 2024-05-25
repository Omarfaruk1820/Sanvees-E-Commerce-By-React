import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import AllCategories from "../Componets/AllCategories/AllCategories";
import NewPro from "../Componets/NewPro/NewPro";
import TodaydealView from "../Componets/TodayDeals/TodaydealView";
import FlashSaleView from "../Componets/FlashSale/FlashSaleView";
import Newproductview from "../Componets/NewProduct/Newproductview";
import CategoriViewAll from "../Componets/Categories/CategoriViewAll";
import DressViewAll from "../Componets/Dress/DressViewAll";
import ViewAllBeauty from "../Componets/Beauty/ViewAllBeauty";
import ViewAllBags from "../Componets/Bags/ViewAllBags";
import ShareeAllView from "../Componets/Sharee/ShareeAllView";
import WesternViewAll from "../Componets/Western/WesternViewAll";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        
        {
          path:'/',
          element:<AllCategories></AllCategories>
        },
        {
          path:'/newProduct',
          element:<NewPro></NewPro>
        },
        {
          path:'/TodaydealView',
          element:<TodaydealView></TodaydealView>
        },
        {
          path:'/flashSaleView',
          element:<FlashSaleView></FlashSaleView>
        },
        {
          path:'/newproductview',
          element:<Newproductview></Newproductview>
        },
        {
          path:'/CategoriViewAll',
          element:<CategoriViewAll></CategoriViewAll>
        },
        {
          path:'/dressViewAll',
          element:<DressViewAll></DressViewAll>
        },
        {
          path:'/ViewAllBeauty',
          element:<ViewAllBeauty></ViewAllBeauty>
        },
        {
          path:"viewallbags",
          element:<ViewAllBags></ViewAllBags>
        },
        {
          path:"/ShareeAllView",
          element:<ShareeAllView></ShareeAllView>
        },
        {
          path:'/WesternViewAll',
          element:<WesternViewAll></WesternViewAll>
        }
       
      ]
    },
      
      
    
  ]);
  export default router