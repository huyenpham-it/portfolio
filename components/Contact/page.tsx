import Link from 'next/link';
import { Facebook, Instagram, Linkedin, MyCard } from '../page';
import styles from './page.module.scss';

export const Contact = () => {
	return (
		<div id="contact" className="global-font-color section-separator flex flex-col items-center p-10 lg:p-20">
			<h2 className="bg-gradient-to-r from-(--red-color) to-(--yellow-color) bg-clip-text text-transparent font-bold uppercase w-fit mb-4">
				Contact
			</h2>
			<div className={`text-transparent text-5xl font-bold mb-10 ${styles.textBorder}`}>Contact me!</div>

			<div>I am available for freelance work.</div>
			<div>Please contact me via email or social media.</div>
			<Link
				href="mailto:dieuhuyenpham.it@gmail.com"
				className="pink-color text-2xl font-semibold mt-5 mb-10 underline decoration-dotted underline-offset-8"
			>
				dieuhuyenpham.it@gmail.com
			</Link>

			<div className="flex gap-8 red-color">
				<MyCard className="p-4 hover:scale-110 duration-300 ease-in-out">
					<Link href="https://www.facebook.com/dieuhuyen.pham.1997">
						<Facebook />
					</Link>
				</MyCard>
				<MyCard className="p-4 hover:scale-110 duration-300 ease-in-out">
					<Link href="https://www.linkedin.com/in/dieuhuyenpham13091997/">
						<Linkedin />
					</Link>
				</MyCard>
				<MyCard className="p-4 hover:scale-110 duration-300 ease-in-out">
					<Link href="https://www.instagram.com/cay_thong_nho/">
						<Instagram />
					</Link>
				</MyCard>
			</div>
		</div>
	);
};
