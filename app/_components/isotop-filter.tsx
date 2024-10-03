"use client";

import Isotope from "isotope-layout";
import React from "react";

const categories = ["hot", "onsale", "trending now", "new arrival"];

import { products } from "@/lib/data";
import Card from "@/components/ui/card";
export default function IsotopFilter() {
	// state for storing the isotope object, with an initial value of null
	const [isotope, setIsotope] = React.useState<Isotope | null>(null);
	// state for storing the filter keyword, with an initial value of *, which matches everything
	const [filterKey, setFilterKey] = React.useState("*");
	React.useEffect(() => {
		setIsotope(
			new Isotope(".filter-container", {
				// filter-container: className of the parent of the isotope elements
				itemSelector: ".filter-item", // filter-item: className of the isotope elements
				layoutMode: "fitRows", // for horizontal isotope
			})
		);
	}, []);

	React.useEffect(() => {
		if (isotope) {
			// sanity check
			filterKey === "*"
				? isotope.arrange({ filter: `*` })
				: isotope.arrange({ filter: `.${filterKey}` });
		}
	}, [isotope, filterKey]);

	return (
		<section className="mt-10 sm:mt-16 md:mt-24">
			<div className="container mx-auto">
				<ul>
					<li onClick={() => setFilterKey("*")}>Show Both</li>
					<li onClick={() => setFilterKey("vege")}>Show Veges</li>
					<li onClick={() => setFilterKey("fruit")}>Show Fruits</li>
				</ul>

				<ul className="filter-container">
					<div className="filter-item vege">
						<span>Cucumber</span>
					</div>
					<div className="filter-item fruit">
						<span>Apple</span>
					</div>
					<div className="filter-item fruit">
						<span>Orange</span>
					</div>
					<div className="filter-item fruit vege">
						<span>Tomato</span>
					</div>
				</ul>
				<div className="flex">
					{products.map((product, i) => (
						<Card data={product} key={i} />
					))}
				</div>
			</div>
		</section>
	);
}
