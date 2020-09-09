import React from 'react';
import '../style/header.scss';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className='header'>
      {/* icon */}
      <MenuIcon className='header__menu' />
      <img
        src='http://pngimg.com/uploads/amazon/amazon_PNG25.png'
        alt='logo'
        className='header__logo'
      />
      <div className='header__search'>
        <div className='header__category'></div>
        <div className='header__input'></div>
        <div className='header__searchbtn'></div>
      </div>
      {/* country icon */}
      <div className='header__rightNav'>
        <div className='header__user'></div>
        <div className='header__return'></div>
        <div className='header__prime'></div>
        <div className='header__cart'></div>
      </div>
    </div>
  );
}

export default Header;
