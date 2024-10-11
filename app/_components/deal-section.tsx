"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function DealOfTheDay() {
	const [timeLeft, setTimeLeft] = useState({
		days: 3,
		hours: 8,
		minutes: 9,
		seconds: 9,
	});

	useEffect(() => {
		const countdown = () => {
			let { days, hours, minutes, seconds } = timeLeft;

			if (seconds > 0) {
				seconds -= 1;
			} else {
				seconds = 59;
				if (minutes > 0) {
					minutes -= 1;
				} else {
					minutes = 59;
					if (hours > 0) {
						hours -= 1;
					} else {
						hours = 23;
						if (days > 0) {
							days -= 1;
						} else {
							clearInterval(timer);
						}
					}
				}
			}

			setTimeLeft({ days, hours, minutes, seconds });
		};

		const timer = setInterval(countdown, 1000);

		return () => clearInterval(timer);
	}, [timeLeft]);

	return (
		<section className="my-10 sm:my-16 md:my-24">
			<div className="container">
				<div className="bg-section_bg flex flex-col md:flex-row gap-10 pt-14 px-4 xl:px-[73px] relative">
					<div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-start pb-12 relative">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl lg:leading-11 font-bold md:max-w-[448px] capitalize mt-5">
							deal of the doy
						</h1>
						<p className="text-base leading-7 font-bold md:max-w-[468px] mt-space-5.22 mb-space-7.22">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's
							standard dummy text ever since the 1500s,
						</p>
						<div className="flex justify-center items-center flex-col sm:flex-row md:justify-start gap-space-7.22 mb-10 overflow-auto">
							<div className="w-24 h-24 bg-secondary_white text-center px-5 py-3 rounded-md">
								<h2 className="text-5xl leading-9 font-lato font-bold mb-2">
									{timeLeft.days.toString().padStart(2, "0")}
								</h2>
								<span className="text-xl leading-7.2 font-lato font-normal">
									Day
								</span>
							</div>
							<div className="w-24 h-24 bg-secondary_white text-center px-5 py-3 rounded-md">
								<h2 className="text-5xl leading-9 font-lato font-bold mb-2">
									{timeLeft.hours.toString().padStart(2, "0")}
								</h2>
								<span className="text-xl leading-7.2 font-lato font-normal">
									Hour
								</span>
							</div>
							<div className="w-24 h-24 bg-secondary_white text-center px-5 py-3 rounded-md">
								<h2 className="text-5xl leading-9 font-lato font-bold mb-2">
									{timeLeft.minutes.toString().padStart(2, "0")}
								</h2>
								<span className="text-xl leading-7.2 font-lato font-normal">
									Minute
								</span>
							</div>
							<div className="w-24 h-24 bg-secondary_white text-center px-5 py-3 rounded-md">
								<h2 className="text-5xl leading-9 font-lato font-bold mb-2">
									{timeLeft.seconds.toString().padStart(2, "0")}
								</h2>
								<span className="text-xl leading-7.2 font-lato font-normal">
									Second
								</span>
							</div>
						</div>
						<button className="py-6 px-20 md:px-24 rounded-lg text-xl leading-7.2 font-lato font-normal bg-primary text-secondary_white">
							shop now
						</button>
					</div>
					<div className="w-4/5 md:w-1/2 m-auto order-1 md:order-2 relative z-20">
						<Image
							className="w-full aspect-square"
							src="/img/abatar-16.jpg"
							alt="avatar"
							width={512}
							height={512}
						/>
						<Image
							className="absolute -translate-y-2/4 top-1/2 -right-10 z-30"
							src="/img/abarar-bg.png"
							alt="background"
							width={127}
							height={107}
						/>
					</div>
					<Image
						className="absolute top-0 left-0"
						src="/img/abarar-bg.png"
						alt="background pattern"
						width={127}
						height={107}
					/>
				</div>
			</div>
		</section>
	);
}
