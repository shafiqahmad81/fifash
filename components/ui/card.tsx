import { Product } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ data }: { data: Product }) {
	const {
		imageUrl = "img/abatar-15.jpg",
		name,
		price,
		discountedPrice,
	} = data;
	return (
		<figure className="flex flex-col h-full">
			<Link className="flex-1" href="#">
				<Image
					className="w-full h-full"
					src={imageUrl}
					width={296}
					height={378}
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
					<Link href="#">{name}</Link>
				</h4>
				<div className="flex items-center justify-center gap-5">
					<h4 className="line-through text-[#C4C4C4] text-lg leading-7.2 font-bold">
						${price}
					</h4>
					<h4 className="text-lg leading-7.2 font-bold">
						${discountedPrice}
					</h4>
				</div>
			</figcaption>
		</figure>
	);
}

export default Card;
