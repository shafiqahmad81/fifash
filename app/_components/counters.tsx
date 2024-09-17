"use client";
import Counter from "@/components/ui/counter";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Counters() {
	const [init, setInit] = useState<boolean>(false);
	return (
		<motion.div
			className="w-3/5 md:w-[730px] max-w-full bg-secondary_white rounded-2xl py-7 lg:py-[50px] px-8 lg:px-[61px] flex items-center justify-between flex-col md:flex-row drop-shadow-3xl m-auto md:ml-auto lg:mr-20 -mt-10 lg:-mt-16 gap-5"
			onViewportEnter={() => {
				setInit(true);
			}}
			viewport={{ amount: "some", once: true }}>
			<div className="text-center">
				<h3 className="text-4xl leading-8 font-bold font-lato md:mb-3">
					2022
				</h3>
				<h5 className="text-base leading-8 font-bold">Fifash Founded</h5>
			</div>
			<div className="text-center">
				<Counter
					className="text-4xl leading-8 font-bold font-lato md:mb-3"
					target={86000}
					speed={300}
					init={init}
				/>
				<h5 className="text-base leading-8 font-bold">Product Sold</h5>
			</div>
			<div className="text-center">
				<Counter
					className="text-4xl leading-8 font-bold font-lato md:mb-3"
					target={69000}
					speed={300}
					init={init}
				/>
				<h5 className="text-base leading-8 font-bold">Best Reviews</h5>
			</div>
		</motion.div>
	);
}

export default Counters;
