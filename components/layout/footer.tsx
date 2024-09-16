function Footer() {
	return (
		<footer className="bg-footer_bg pt-28 pb-10 sm:pb-16 md:pb-20 lg:pb-24">
			<div className="container mx-auto px-4">
				<div className="text-center">
					<ul className="flex gap-4 justify-center flex-wrap mb-8 md:mb-12 font-lato uppercase">
						<li className="text-xl leading-7.2 text-secondary_white">
							<a href="">Men</a>
						</li>
						<li className="text-xl leading-7.2 text-secondary_white">
							<a href=""> Woman</a>
						</li>
						<li className="text-xl leading-7.2 text-secondary_white">
							<a href=""> Kids</a>
						</li>
						<li className="text-xl leading-7.2 text-secondary_white">
							<a href=""> coLLECTION</a>
						</li>
						<li className="text-xl leading-7.2 text-secondary_white">
							<a href=""> TRENDS</a>
						</li>
					</ul>
					<h5 className="text-base font-Lato font-normal text-secondary_white">
						copyright fifash all right reserved
					</h5>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
