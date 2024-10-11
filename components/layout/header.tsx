import Image from "next/image";
import React from "react";

function Header() {
	return (
		<header className="bg-section_bg pt-5 md:pt-10 pb-4">
			<div className=" flex md:items-center gap-1 sm:gap-3 lg:gap-6 relative">
				<div className="container">
					<h2 className="text-2xl md:text-3.2xl md:leading-7.2 font-lato font-black">
						FIFASH
					</h2>
				</div>
				<div className="flex-grow text-center mt-10 md:mt-0 relative z-20">
					<ul
						id="menu"
						className="md:flex justify-center font-lato hidden">
						<li className="py-2 px-2 text-base md:text-xl uppercase font-normal">
							<a href="#">Men</a>
						</li>
						<li className="py-2 px-2 text-lg md:text-xl uppercase font-normal">
							<a href="#">Woman</a>
						</li>
						<li className="py-2 px-2 text-lg md:text-xl uppercase font-normal">
							<a href="#">Kids</a>
						</li>
						<li className="py-2 px-2 text-lg md:text-xl uppercase font-normal">
							<a href="#">coLLECTION</a>
						</li>
						<li className="py-2 px-2 text-lg md:text-xl uppercase font-normal">
							<a href="#">TRENDS</a>
						</li>
						<button className="font-lato font-normal text-xl tracking-widest border border-primary w-full py-2 rounded-2xl bg-transparent md:hidden relative z-20">
							LOGIN
						</button>
					</ul>
				</div>
				<div className="min-w-8 relative z-20">
					<Image
						className="w-full"
						src="/img/envelab-icn.svg"
						alt="Envelabi icn"
						width={32}
						height={30}
					/>
				</div>
				<div className="w-52 hidden md:block">
					<button className="font-lato font-normal text-xl tracking-widest border border-primary w-full px-4 py-2 lg:py-4 rounded-2xl bg-transparent relative z-20">
						LOGIN
					</button>
				</div>
				{/* Mobile menu */}
				<svg
					id="menu-btn"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentcolor"
					className="w-10 h-10 -mt-1 cursor-pointer relative z-20 md:hidden">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
				<svg
					id="close-btn"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-10 h-10 -mt-1 cursor-pointer relative z-20 hidden">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18 18 6M6 6l12 12"
					/>
				</svg>
				<div className="w-[19.930%] aspect-square bg-gray_bg/35 absolute -top-10 right-0 z-10" />
				<Image
					className="absolute top-16 -left-14"
					src="/img/abarar-bg.png"
					alt=""
					width={124}
					height={127}
					priority
				/>
			</div>
		</header>
	);
}

export default Header;
