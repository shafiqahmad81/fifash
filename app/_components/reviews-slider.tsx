"use client";

import { products } from "@/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function ReviewsSlider() {
	return (
		<Swiper
			spaceBetween={16}
			slidesPerView={1.1}
			wrapperClass="lg:-ml-[19%]"
			loop
			breakpoints={{
				576: {
					slidesPerView: 1.3,
				},
				992: {
					slidesPerView: 2.66,
					spaceBetween: 24,
					centeredSlides: true,
				},
			}}
			centeredSlidesBounds={true}>
			{products.map((product, i) => (
				<SwiperSlide className="!h-auto lg:max-w-[469px]" key={i}>
					<div className="max-w-full px-12 pt-8 pb-5 bg-section_bg/30 text-center">
						<h4 className="capitalize text-2xl leading-10 font-bold mb-4 max-w-[407px] mx-auto">
							comfortable and all my expectation! i ordered a medium and
							fit perfectly
						</h4>
						<p className="text-base leading-7.2 font-bold mb-4 max-w-[367px] mx-auto">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's
							standard dummy text ever since the 1500s, when an unknown
							printer took a galley of type and scrambled it to make a
							type specimen book. It has survived not only five
							centuries, .
						</p>

						<div className="w-[123px] h-[123px] rounded-full bg-footer_bg mb-4 inline-block"></div>
						<h3 className="text-base leading-7.2 font-bold uppercase">
							obaidullah affan
						</h3>
						<h5 className="text-sm font-bold capitalize">customer</h5>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default ReviewsSlider;
