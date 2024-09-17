"use client";

import Card from "@/components/ui/card";
import { products } from "@/lib/data";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function ProductSlider() {
	return (
		<Swiper spaceBetween={24} slidesPerView={2.5}>
			{products.map((product, i) => (
				<SwiperSlide className="!h-auto" key={i}>
					<Card data={product} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default ProductSlider;
