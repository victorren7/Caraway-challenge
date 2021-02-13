import React from 'react';
import '../App.scss';
import '../styles/Challenge-3.scss';
import productData from '../productData.js';
import { map } from 'lodash';

const Challenge_3 = () => {


  return (
    <div className='challenge-3'>
      <h1 className='header'>Spring Collection</h1>
      <div className='products'>
        {map(productData, (product, index) => {
          const price = product.price.toString().split('0'[0]);
          const priceMax = product.price_max.toString().split('0'[0]);

          return (
            <div key={index} className='product-container'>
              <div className='image-container'>
                <img
                  className='product-image'
                  src={product.featured_image}
                  alt='shoe-image'
                /> 
              </div>
              <div className='info-grid'>
                <span>{product.title.split('-')[0]}</span>
                <p className='small-font'>
                  {product.title.split('-')[1]}
                </p>
                <p className='small-font'>
                  {product.variants.length} Colors Available
                </p>
                {product.price !== product.price_max ?
                  <div className='product-price small-font'>
                    <p className='green-text'>
                      ${price}
                    </p>
                    <p className='grey-text'>
                      ${priceMax}
                    </p>
                  </div>
                  :
                  <p className='small-font product-price'>
                    ${price}
                  </p>
                }
              </div>
            </div>
          )
        })
        
        }
      </div>
    </div>
  );
};

export default Challenge_3;