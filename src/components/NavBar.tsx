import { IoCartOutline } from "react-icons/io5";
import { Outlet, Link } from "react-router-dom";

interface NavBarProps {
  cartNum: number;
}

const NavBar: React.FC<NavBarProps> = ({cartNum}) => {
  return (
    <>
    <div className='navBar'>
        <Link to="/">My Store</Link>
        <Link to='/cart'>
          <div className="cart-items">
            <IoCartOutline/>
            <p className="cart-num">{cartNum}</p>
          </div>
        </Link>
    </div>
    <Outlet/>
    </>
  )
}

export default NavBar