import React from 'react';
import '../style/home.scss';
import Product from '../components/Product';

function Home() {
  return (
    <div className='home'>
      <img
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt='banner'
        className='home__banner'
      />

      <div className='home__row'>
        <Product
          id='1'
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={310}
          rating={5}
          image='data:image/webp;base64,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'
        />
        <Product
          id='1'
          title='AmazonBasics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack'
          price={15}
          rating={5}
          image='https://m.media-amazon.com/images/I/71nDX36Y9UL._AC_UY436_FMwebp_QL65_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='1'
          title='Apple 16" MacBook Pro with Touch Bar, 9th-Gen 8-Core Intel i9 2.4GHz, 32GB RAM, 1TB SSD, AMD Radeon Pro 5500M 8GB, Space Gray, Late 2019 Z0XZ0052F / Z0XZ0007A'
          price={3499}
          rating={5}
          image='https://m.media-amazon.com/images/I/61jR7GTw0JL._AC_UY436_FMwebp_QL65_.jpg'
        />
        <Product
          id='1'
          title='Tomtoc 13.5 Inch Laptop Shoulder Bag for 13-inch MacBook Pro, MacBook Air, Surface Book, Surface Laptop, Multi-Functional Laptop Messenger Bag for Surface Pro, Dell XPS 13'
          price={39}
          rating={5}
          image='https://m.media-amazon.com/images/I/71EklLcRk1L._AC_UY436_FMwebp_QL65_.jpg'
        />
        <Product
          id='1'
          title='Bose SoundSport Free, True Wireless Earbuds, (Sweatproof Bluetooth Headphones for Workouts and Sports), Midnight Blue / Citron'
          price={149}
          rating={5}
          image='https://m.media-amazon.com/images/I/61Bx0jEMbnL._AC_UY436_FMwebp_QL65_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='1'
          title='Nintendo Switch 32GB Console Video Games w/ 32GB Memory Card | Neon Red/Neon Blue Joy-Con | 1080p Resolution | 802.11ac WiFi | HDMI | Surround Sound | IR Motion Camera'
          price={449}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/417kf2GJBuL._AC_US436_FMwebp_QL65_.jpg'
        />
      </div>
    </div>
  );
}

export default Home;
