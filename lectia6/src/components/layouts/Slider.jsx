import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { fetchProducts } from '@/services/product/productService.js';
import Product from '@/components/product/Product';

const Slider = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then(result => setProducts([...result.products]));
    }, []);

    return (
        <div className="slider-container w-full max-w-7xl mx-auto py-8 px-4 md:px-8 lg:px-16">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 5,
                    },
                    1024: {
                        slidesPerView: 6,
                    },
                }}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <Product key={product.id} {...product} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
