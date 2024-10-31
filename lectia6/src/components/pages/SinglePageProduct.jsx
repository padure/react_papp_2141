import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchProduct
} from '@/services/product/productService.js';
import Slider from "react-slick";
//Style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SinglePageProduct = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    dots: true,
    arrow: false
  }
  const [product, setProduct] = useState({});
  let { id } = useParams();
  useEffect(() => {
    fetchProduct(id).then(result => setProduct({ ...result }));
  }, []);
  return (
    <div className='container'>
      <h1>{product.title}</h1>
      <div className='w-1/4 h-72 mb-8'>
        <Slider {...settings}>
          {product.images?.map((image, index) => (
              <img key={index} src={image} alt={product.title} className='w-12 h-64' />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default SinglePageProduct;
