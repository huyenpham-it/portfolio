import {
	Contact,
	Features,
	Footer,
	HeaderBar,
	Intro,
	LazyShow,
	MyMenu,
	Portfolio,
	PseudoCorner,
	Resume,
	ScrollToTopButton
} from '@/components/page';
import { componentPage } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="w-full h-full bg-background">
			<header className="header w-full h-[500px] sm:h-screen flex justify-center items-center p-5 sm:p-10 lg:px-20">
				<HeaderBar />
				<div className="w-full h-full relative">
					<Image
						src="/avatar.jpg"
						alt="banner"
						width={2000}
						height={1000}
						className="avatar rounded-[40px]"
						priority
					/>

					<div className="absolute top-0 right-0 w-[70px] md:w-[500px] h-[70px] md:h-[60px]">
						<div className="relative w-full h-full">
							<div className="absolute left-0 top-0 right-0 bottom-0 w-full h-full bg-background rounded-bl-[40px]">
								<div className="w-full h-full hidden md:flex justify-center items-center">
									{componentPage.map((item: any, index: number) => (
										<Link
											key={index}
											href={item.path}
											className="relative bg-gradient-to-r from-(--red-color) to-(--yellow-color) hover:-translate-y-1 duration-300 ease-in-out bg-clip-text text-xl font-regular text-transparent p-2"
										>
											{item.title}
										</Link>
									))}
								</div>
								<div className="w-full h-full flex justify-end items-start md:hidden">
									<MyMenu />
								</div>
							</div>

							<div className="absolute top-0 right-[70px] md:right-[500px] w-[25px] h-[25px]">
								<PseudoCorner />
							</div>
							<div className="absolute top-[70px] md:top-[60px] right-0 w-[40px] h-[40px]">
								<PseudoCorner />
							</div>
						</div>
					</div>

					<div className="my-info absolute bottom-0 left-0 w-[250px] sm:w-[380px] h-[100px] sm:h-[150px]">
						<div className="relative w-full h-full">
							<div className="absolute left-0 top-0 right-0 bottom-0 w-full h-full bg-background flex justify-start items-center rounded-tr-[40px]">
								<h2 className="my-info__title bg-gradient-to-r from-(--red-color) to-(--yellow-color) bg-clip-text text-xl sm:text-3xl font-extrabold text-transparent p-3">
									Hi, I'm Huyen Pham
									<br />
									Front-end Developer
								</h2>
							</div>
							<div className="pseudo-corner absolute bottom-[100px] sm:bottom-[150px] left-0 w-[40px] h-[40px] rotate-180">
								<PseudoCorner />
							</div>
							<div className="pseudo-corner absolute bottom-0 left-[250px] sm:left-[380px] w-[40px] h-[40px] rotate-180">
								<PseudoCorner />
							</div>
						</div>
					</div>
				</div>
			</header>

			<LazyShow>
				<Intro />
			</LazyShow>

			<LazyShow>
				<Features />
			</LazyShow>

			<LazyShow>
				<Portfolio />
			</LazyShow>

			<LazyShow>
				<Resume />
			</LazyShow>

			<LazyShow>
				<Contact />
			</LazyShow>

			<LazyShow>
				<Footer />
			</LazyShow>

			<ScrollToTopButton />
		</div>
	);
}
