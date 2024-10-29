import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Product from '@/components/product/Product';
import { fetchProducts } from '@/services/product/productService.js';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSlick = () => {

    const ArrowLeft = ({ className, style, onClick }) => {
        return (
            <FaAngleLeft
                className={`${className} text-cyan-700 hover:text-cyan-500 transition duration-300 text-xl`}
                style={{ ...style, left: "-30px", zIndex: 1 }}
                onClick={onClick}
            />
        );
    };

    const ArrowRight = ({ className, style, onClick }) => {
        return (
            <FaAngleRight
                className={`${className} text-cyan-700 hover:text-cyan-500 transition duration-300 text-xl`}
                style={{ ...style, right: "-30px", zIndex: 1 }}
                onClick={onClick}
            />
        );
    };

    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: true,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
        draggable: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    };
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then(result => setProducts([...result.products]));
    }, []);
    return (
        <div className="container slider-container m-auto my-10">
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id} className='rounded-md hover:bg-cyan-100 h-60 hover:cursor-pointer m-4 p-3'>
                        <Product key={product.id} {...product} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderSlick;
