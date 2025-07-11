'use client';

import { componentPage } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MyMenu } from '../page';

export const HeaderBar = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

        toggleVisibility();

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<div className={`fixed ${isVisible ? 'top-0' : 'top-[-64px]'} left-0 right-0 duration-200 ease-in-out z-10`}>
			<div className="w-full h-[64px] flex justify-between items-center justify-between bg-background shadow-(--box-shadow-header) px-5 sm:px-10 lg:px-20">
				<Link
					href="/"
					className="global-font-color w-[44px] h-[44px] flex items-center justify-center rounded-full ring-2"
				>
					<Image className="rounded-full shadow-lg" src="/avatar.jpg" width={44} height={44} alt="" />
				</Link>
				<div className="w-fit h-full hidden sm:flex justify-center items-center">
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
				<div className="w-[50px] h-[50px] sm:hidden">
					<MyMenu />
				</div>
			</div>
		</div>
	);
};
