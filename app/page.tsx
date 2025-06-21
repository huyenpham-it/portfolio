import { Contact, Features, Footer, IconArrowTop, MyCard, Portfolio, PseudoCorner, Resume } from '@/components/page';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="w-full h-full bg-background">
			<header className="w-full h-screen flex justify-center items-center p-10 lg:px-20">
				<div className="w-full h-full relative">
					<Image
						src="/avatar.jpg"
						alt="banner"
						width={2000}
						height={1000}
						className="rounded-[40px]"
						priority
					/>

					<div className="absolute top-0 right-0 w-[500px] h-[60px]">
						<div className="relative w-full h-full">
							<div className="absolute left-0 top-0 right-0 bottom-0 w-full h-full bg-background flex justify-center items-center rounded-bl-[40px]">
								<Link
									href="#features"
									className="relative bg-gradient-to-r from-(--red-color) to-(--yellow-color) hover:-translate-y-1 duration-300 ease-in-out bg-clip-text text-xl font-regular text-transparent p-2"
								>
									Features
								</Link>
								<Link
									href="#projects"
									className="bg-gradient-to-r from-(--red-color) to-(--yellow-color) hover:-translate-y-1 duration-300 ease-in-out bg-clip-text text-xl font-regular text-transparent p-2"
								>
									Projects
								</Link>
								<Link
									href="#resume"
									className="bg-gradient-to-r from-(--red-color) to-(--yellow-color) hover:-translate-y-1 duration-300 ease-in-out bg-clip-text text-xl font-regular text-transparent p-2"
								>
									Resume
								</Link>
								<Link
									href="#contact"
									className="bg-gradient-to-r from-(--red-color) to-(--yellow-color) hover:-translate-y-1 duration-300 ease-in-out bg-clip-text text-xl font-regular text-transparent p-2"
								>
									Contact
								</Link>
							</div>
							<div className="absolute top-0 right-[500px] w-[25px] h-[25px]">
								<PseudoCorner />
							</div>
							<div className="absolute top-[60px] right-0 w-[40px] h-[40px]">
								<PseudoCorner />
							</div>
						</div>
					</div>

					<div className="absolute bottom-0 left-0 w-[380px] h-[150px]">
						<div className="relative w-full h-full">
							<div className="absolute left-0 top-0 right-0 bottom-0 w-full h-full bg-background flex justify-start items-center rounded-tr-[40px]">
								<h2 className="bg-gradient-to-r from-(--red-color) to-(--yellow-color) bg-clip-text text-3xl font-extrabold text-transparent p-3">
									Hi, I'm Huyen Pham
									<br />
									Front-end Developer
								</h2>
							</div>
							<div className="absolute bottom-[150px] left-0 w-[40px] h-[40px] rotate-180">
								<PseudoCorner />
							</div>
							<div className="absolute bottom-0 left-[380px] w-[40px] h-[40px] rotate-180">
								<PseudoCorner />
							</div>
						</div>
					</div>
				</div>
			</header>

			<Features />
			<Portfolio />
			<Resume />
			<Contact />
			<Footer />

			<div className="fixed bottom-10 right-10 global-font-color z-100">
				<MyCard className="rounded-full p-4 hover:scale-110 duration-300 ease-in-out">
					<IconArrowTop />
				</MyCard>
			</div>
		</div>
	);
}
