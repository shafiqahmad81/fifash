"use client";

import Card from "@/components/ui/card";
import { Product } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import IsotopFilter from "./isotop-filter";

const categories = ["hot", "onsale", "trending now", "new arrival"];

export default function ProductSection({
	products,
}: {
	products: Array<Product>;
}) {
	const [activeCategory, setActiveCategory] = useState("hot");

	const filteredProducts = products.filter((product) =>
		product.tags.includes(activeCategory)
	);

	return (
		// <section className="mt-10 sm:mt-16 md:mt-24">
		// 	<div className="text-center mb-10 sm:mb-20">
		// 		<h2 className="text-5xl md:text-6xl md:leading-11 font-bold mb-5 capitalize">
		// 			our product
		// 		</h2>
		// 		<div className="flex justify-center mx-auto">
		// 			<ul className="flex items-center flex-col sm:flex-row gap-4 sm:gap-10">
		// 				{categories.map((category) => (
		// 					<li
		// 						key={category}
		// 						className={`text-xl leading-7.2 font-bold font-lato uppercase relative cursor-pointer ${
		// 							activeCategory === category
		// 								? "text-primary"
		// 								: "text-secondary"
		// 						}`}
		// 						onClick={() => setActiveCategory(category)}>
		// 						<button>{category}</button>
		// 					</li>
		// 				))}
		// 			</ul>
		// 		</div>
		// 	</div>
		// 	<div className="container mx-auto px-4 lg:px-space-x-18">
		// 		<motion.div
		// 			layout
		// 			className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9">
		// 			<AnimatePresence>
		// 				{filteredProducts.map((product, i) => (
		// 					<motion.div
		// 						key={i}
		// 						layout
		// 						initial={{ opacity: 0, y: 20 }}
		// 						animate={{ opacity: 1, y: 0 }}
		// 						exit={{ opacity: 0, y: 20 }}
		// 						transition={{ duration: 0.3 }}>
		// 						<Card data={product} key={i} />
		// 					</motion.div>
		// 				))}
		// 			</AnimatePresence>
		// 		</motion.div>
		// 	</div>
		// </section>
		<IsotopFilter />
	);
}
