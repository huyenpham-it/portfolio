import { Canva, Layout, MyCard } from '../page';

export const Features = () => {
	return (
		<div
			id="features"
			className="global-font-color section-separator p-5 sm:p-10 lg:p-20 scroll-mt-20 lg:scroll-mt-10"
		>
			<h2 className="w-fit bg-gradient-to-r from-(--red-color) to-(--yellow-color) bg-clip-text text-transparent font-bold uppercase mb-4">
				Features
			</h2>
			<div className="pink-color text-3xl sm:text-5xl font-semibold">What I Do</div>

			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 sm:pt-15">
				<MyCard>
					<div className="flex flex-col gap-4 hover:-translate-y-1 duration-300 ease-in-out p-6 lg:px-13 lg:py-10">
						<div className="red-color">
							<Layout />
						</div>
						<h4 className="w-fit bg-gradient-to-r from-(--red-color) to-(--yellow-color) bg-clip-text text-transparent text-xl sm:text-2xl font-semibold">
							Front-end Developer
						</h4>
						<p>
							I build user interfaces (UI) and user experiences (UX) for web applications. I can cut
							layouts from Figma, Images, or just sketches on paper, into a piece of website.
						</p>
					</div>
				</MyCard>
				<MyCard>
					<div className="flex flex-col gap-4 hover:-translate-y-1 duration-300 ease-in-out p-6 lg:px-13 lg:py-10">
						<div className="red-color">
							<Canva />
						</div>
						<h4 className="w-fit bg-gradient-to-r from-(--red-color) to-(--yellow-color) bg-clip-text text-transparent text-xl sm:text-2xl font-semibold">
							Canva Design
						</h4>
						<p>
							Lately I've been learning more about design with canva to provide designs that suit your
							needs. I am specialized in all types of logo design and branding.
						</p>
					</div>
				</MyCard>
			</div>
		</div>
	);
};
