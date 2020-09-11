import React from 'react';
import '../style/product.scss';

function Product({ id, title, price, rating, image }) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((item) => (
              <span role='img' aria-label='star'>
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt='product' />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
