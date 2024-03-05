import React, { useContext ,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart , AiOutlineMenu,} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/context";


// link style
import "../styles/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };


// useEffect hook
// For devices , less than 600px , make setIsMenuopen(false)
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 600) {
      setIsMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);

  // Cleanup function to remove event listener
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

const navigate = useNavigate();
  const { overallProducts } = useContext(ShopContext);
  return (
    <header className="header">

      <nav className={isMenuOpen?'menuOpen-navbar':'navbar'}>
        <div className="logo">
          <h2 onClick={() => {
        
        navigate("/home");
      }}>MyShop</h2>
        </div>

        <div className={isMenuOpen?'.menuOpenLinksPart':'links-part'}>
{/* links are home,clothing and elctronics */}
          <div className={isMenuOpen?'menuOpenleft-links':'left-links'}>

            <Link to={"/home"} className="myLinks"  onClick={
             handleMenuClick
            }>
              Home
            </Link>
            <Link to={"/clothing"} className="myLinks" onClick={
             handleMenuClick
            }>
              Clothing
            </Link>
            <Link to={"/electronics"} className="myLinks" onClick={
             handleMenuClick
            }>
              Electronics
            </Link>
          </div>

{/* menu icon div */}
           <div className="menu-icon-div">
            <AiOutlineMenu className=
            {isMenuOpen?'openMenu-icon':'menu-icon'}
            onClick={
             handleMenuClick
            }
             
            /> 
            
           </div>

{/* cart div */}
          <Link to={"/cart"} className={isMenuOpen?'hideMenu':'cart-link'}>
            <AiOutlineShoppingCart className="cart-icon" />
              <sup className="cart-count">{overallProducts()}</sup>       
          </Link>

        </div>
      </nav>
    </header>
  );
};

export default Header;
