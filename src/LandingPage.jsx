import Banner from "./Banner";
import Categroies from "./Categroies";
import FProductCategoryLists from "./FProductCategoryLists";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Categroies />
      <Banner />
      <FProductCategoryLists />
    </div>
  );
};

export default LandingPage;
