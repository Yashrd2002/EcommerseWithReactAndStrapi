import React,{useState} from "react";
import "./Navbar.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setopen] = useState(false)
  const products = useSelector(state=>state.cart.products)

  return (
    <div className="nav">
      <div className="navbar1">
        <div className="inf">
          <Link className="link" to="">
            Home
          </Link>
          <Link className="link" to="">
            About
          </Link>
          <Link className="link" to="">
            Contact
          </Link>
          <Link className="link" to="">
            Stores
          </Link>
          <div>
            <span>USD</span>
            <ArrowDownwardIcon className="ico" />
          </div>
          <div>
            <span>English</span>
            <ArrowDownwardIcon className="ico" />
          </div>
        </div>
      </div>
      <div className="navbar2">
        <div className="left">
          <div className="head">
            <img src="logo.jpeg" alt=""/>
          </div>
        </div>
        <div className="mid">
          <div className="item">
            <Link className="link" to="/products/1">
              Home
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/india-flag-country-nation-union-empire-32988.png?f=avif&w=256"
              alt=".."
            />
            <ArrowDownwardIcon />
          </div>
          <div className="item">
            <SearchIcon />
          </div>
          <div className="item">
            <PersonIcon />
          </div>
          <div className="item">
            <FavoriteBorderIcon />
          </div>
          <div className="item" onClick={()=>setopen(!open)}>
            <ShoppingCartIcon/>
            <span>{ products.length}</span>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
