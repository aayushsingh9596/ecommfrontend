import { featuredProductCategies } from "./assets/fakedata.js";
import FproductCatgoryList from "./FproductCatgoryList";
import './FProductCategoryLists.css'

const FProductCategoryLists = () => {
  console.log(featuredProductCategies);
  return (
    <div className="FProductCategoryLists">
        {
            featuredProductCategies.map((fpc,index)=>{
              console.log(fpc);
                return <FproductCatgoryList fpc={fpc} key={index}/>
            })
        }
    </div>
  )
}

export default FProductCategoryLists