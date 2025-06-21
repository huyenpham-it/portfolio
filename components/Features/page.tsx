import { Canva, Layout, MyCard } from '../page';

export const Features = () => {
	return (
		<div id="features" className="global-font-color section-separator p-10 lg:p-20">
			<h2 className="w-fit bg-gradient-to-r from-(--red-color) to-(--yellow-color) bg-clip-text text-transparent font-bold uppercase mb-4">
				Features
			</h2>
			<div className="pink-color text-5xl font-semibold mb-10">What I Do</div>

			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
				<MyCard>
					<div className="flex flex-col gap-4 hover:-translate-y-1 duration-300 ease-in-out px-13 py-10">
						<div className="red-color">
							<Layout />
						</div>
						<h4 className="w-fit bg-gradient-to-r from-(--red-color) to-(--yellow-color) bg-clip-text text-transparent text-2xl font-semibold">
							Front-end Developer
						</h4>
						<p>
							I optimizie the user experience using HTML, JQuery, JavaScript and CSS to bring concepts to
							life. I develop and maintain the user interface by following SEO best practices...
						</p>
					</div>
				</MyCard>
				<MyCard>
					<div className="flex flex-col gap-4 hover:-translate-y-1 duration-300 ease-in-out px-13 py-10">
						<div className="red-color">
							<Canva />
						</div>
						<h4 className="w-fit bg-gradient-to-r from-(--red-color) to-(--yellow-color) bg-clip-text text-transparent text-2xl font-semibold">
							Canva Design
						</h4>
						<p>
							I am specialized in all types of logo design and branding and can offer you a variety of
							design techniques to match your business...
						</p>
					</div>
				</MyCard>
			</div>
		</div>
	);
};
