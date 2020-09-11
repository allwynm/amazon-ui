import React from 'react';
import '../style/header.scss';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to='/' className='header__link'>
        <img
          src='http://pngimg.com/uploads/amazon/amazon_PNG25.png'
          alt='logo'
          className='header__logo'
        />
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__rightNav'>
        <Link to='/login' className='header__link'>
          <span className='header__option1'>Hello,</span>
          <span className='header__option2'>Sign In</span>
        </Link>
        <Link to='/' className='header__link'>
          <span className='header__option1'>Returns</span>
          <span className='header__option2'>& Orders</span>
        </Link>
        <Link to='/' className='header__link'>
          <span className='header__option1'>Your</span>
          <span className='header__option2'>Prime</span>
        </Link>
        <Link to='/checkout' className='header__link header__optionBasket'>
          <ShoppingBasketIcon />
          <span className='header__option2 header__count'>0</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
