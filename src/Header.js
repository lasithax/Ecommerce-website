import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
    const [data, setData] = useState(null);

  return (
    <div className='header'>

        <img src="https://i.ibb.co/61jmZv2/baroshop.png" className="header__logo"/>

        <div className="header__search">
            <input
            className='header__searchInput'
            type="text"/>
            <SearchIcon 
            className='header__searchIcon'/>
        </div>

        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello Guest
                </span>
                <span className='header__optionLineTwo'>Sign In
                </span>
            </div>
        </div>

        
        <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>0</span>
        </div>

    </div>
  )
}

export default Header