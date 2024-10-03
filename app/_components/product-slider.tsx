"use client";

import Card from "@/components/ui/card";
import { products } from "@/lib/data";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function ProductSlider() {
	return (
		<Swiper
			spaceBetween={24}
			slidesPerView={1.3}
			wrapperClass="flex "
			init={false}
			breakpoints={{
				992: {
					slidesPerView: 2.5,
				},
			}}>
			{products.map((product, i) => (
				<SwiperSlide className="!h-auto" key={i}>
					<Card
						className="lg:[&_img]:max-h-[457px] max-w-[357px]"
						data={product}
						imageSize={{ width: 357, height: 457 }}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default ProductSlider;
