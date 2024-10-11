"use client";
import Isotope from "isotope-layout";
import React from "react";

const categories = [
	{ label: "all", value: "all" },
	{ label: "hot", value: "hot" },
	{ label: "onsale", value: "onsale" },
	{ label: "trending now", value: "trending_now" },
	{ label: "new arrival", value: "new_arrival" },
];

import { products } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
export default function IsotopFilter() {
	const [isotope, setIsotope] = React.useState<Isotope | null>(null);
	const [filterKey, setFilterKey] = React.useState<string>("all");

	React.useEffect(() => {
		setIsotope(
			new Isotope(".filter-container", {
				itemSelector: ".filter-item",
				layoutMode: "fitRows",
			})
		);
	}, []);

	React.useEffect(() => {
		if (isotope) {
			// sanity check
			filterKey === "all"
				? isotope.arrange({ filter: `*` })
				: isotope.arrange({ filter: `.${filterKey}` });
		}
	}, [isotope, filterKey]);

	return (
		<section className="mt-10 sm:mt-16 md:mt-24">
			<div className="container">
				<div className="flex items-center gap-x-4 gap-y-5 justify-center mb-10 flex-wrap">
					{categories.map((category) => (
						<button
							className={`font-lato uppercase text-xl font-medium border-b ${
								category.value === filterKey
									? "border-black"
									: "border-transparent"
							}`}
							key={category.value}
							onClick={() => setFilterKey(category.value)}>
							{category.label}
						</button>
					))}
				</div>

				<div className="filter-container grid -mx-2">
					{products.map((product, i) => (
						<figure
							className={`h-[400px] md:h-[500px] w-1/2 md:w-1/3 xl:w-1/4 filter-item p-2 ${product.tags
								.map((tag) => tag.toLowerCase().replace(/\s+/g, "_"))
								.join(" ")}`}
							key={i}>
							<Link className="flex-1" href="#">
								<Image
									className="w-full h-[250px] md:h-[350px] object-cover object-top"
									src={product.imageUrl}
									width={300}
									height={300}
									alt="abatar"
								/>
							</Link>
							<figcaption className="bg-secondary_white py-5 px-4 text-center">
								<div className="flex items-center justify-center gap-1 mb-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="#F2C94C"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="#F2C94C"
										className="size-6">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
										/>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="#F2C94C"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="#F2C94C"
										className="size-6">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
										/>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="#F2C94C"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="#F2C94C"
										className="size-6">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
										/>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="#F2C94C"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="#F2C94C"
										className="size-6">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
										/>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="#F2C94C"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="#F2C94C"
										className="size-6">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
										/>
									</svg>
								</div>
								<h4 className="text-lg leading-7.2 font-bold">
									<Link href="#">{product.name}</Link>
								</h4>
								<div className="flex items-center justify-center gap-5">
									<h4 className="line-through text-[#C4C4C4] text-lg leading-7.2 font-bold">
										${product.price}
									</h4>
									<h4 className="text-lg leading-7.2 font-bold">
										${product.discountedPrice}
									</h4>
								</div>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
}
