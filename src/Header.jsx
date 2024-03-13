import "./Header.css";
import {Link} from "react-router-dom";
const Header = () => {

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/"><img
          src="https://png.pngtree.com/template/20190927/ourmid/pngtree-e-commerce-logo-template-image_311731.jpg"
          alt="ecommlogo"
        /></Link>
      </div>
      <div className="header__center">
        <input />
      </div>
      <div className="header__right">
        <div className="profile">
          <img
            src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
            alt="profile"
          />
        </div>
        <div className="cart">
          <Link to="/Cart">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg"
            alt=""
          />
          </Link>
          
        </div>
        <div className="become__seller">
          <img
            src="https://images-platform.99static.com//V80guTSGkpL8LcFzKoxCU5F50v8=/1251x29:1806x583/fit-in/500x500/99designs-contests-attachments/140/140536/attachment_140536572"
            alt=""
          />
        </div>
        <div className="menu">
          <img
            src="https://t3.ftcdn.net/jpg/02/05/50/86/360_F_205508624_vW2g4uq40jCyC59eFgXiTHuDdPvAIiO4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
