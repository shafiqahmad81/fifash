export interface Product {
	name: string;
	price: number;
	discountedPrice: number;
	rating: number;
	imageUrl: string;
	description: string;
	tags: string[];
}

const products: Product[] = [
	{
		name: "pastel long sleeve",
		price: 120,
		discountedPrice: 90,
		rating: 5,
		imageUrl: "/img/abatar-8.jpg", // Placeholder for actual image URL
		description: "A stylish pastel long sleeve for casual wear.",
		tags: ["hot", "onsale"],
	},
	{
		name: "pastel long sleeve",
		price: 250,
		discountedPrice: 150,
		rating: 5,
		imageUrl: "/img/abatar-9.jpg", // Placeholder for actual image URL
		description: "A stylish pastel long sleeve for casual wear.",
		tags: ["hot", "trending now"],
	},
	{
		name: "pastel long sleeve",
		price: 220,
		discountedPrice: 120,
		rating: 5,
		imageUrl: "/img/abatar-10.jpg", // Placeholder for actual image URL
		description: "A stylish pastel long sleeve for casual wear.",
		tags: ["trending now", "new arrival", "hot"],
	},
	{
		name: "pastel long sleeve",
		price: 300,
		discountedPrice: 250,
		rating: 5,
		imageUrl: "/img/abatar-15.jpg", // Placeholder for actual image URL
		description: "A stylish pastel long sleeve for casual wear.",
		tags: ["onsale", "hot"],
	},
	{
		name: "pastel long sleeve",
		price: 150,
		discountedPrice: 110,
		rating: 5,
		imageUrl: "/img/abatar-15.jpg", // Placeholder for actual image URL
		description: "A stylish pastel long sleeve for casual wear.",
		tags: ["hot"],
	},
	{
		name: "pastel long sleeve",
		price: 250,
		discountedPrice: 200,
		rating: 5,
		imageUrl: "/img/abatar-11.jpg", // Placeholder for actual image URL
		description: "A stylish pastel long sleeve for casual wear.",
		tags: ["onsale", "new arrival", "hot"],
	},
	{
		name: "pastel long sleeve",
		price: 320,
		discountedPrice: 290,
		rating: 5,
		imageUrl: "/img/abatar-12.jpg", // Placeholder for actual image URL
		description: "A stylish pastel long sleeve for casual wear.",
		tags: ["hot"],
	},
	{
		name: "pastel long sleeve",
		price: 120,
		discountedPrice: 80,
		rating: 5,
		imageUrl: "/img/abatar-13.jpg", // Placeholder for actual image URL
		description: "A stylish pastel long sleeve for casual wear.",
		tags: ["onsale", "trending now", "hot"],
	},
];

export { products };
