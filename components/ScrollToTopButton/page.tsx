'use client';

import { useEffect, useState } from 'react';
import { IconArrowTop, MyCard } from '../page';

export const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<div
			className={`global-font-color fixed bottom-10 right-10 z-100 ${isVisible ? 'opacity-100' : 'opacity-0'} duration-100 ease-in-out`}
			onClick={scrollToTop}
		>
			<MyCard className="rounded-full p-4 hover:scale-110 hover:text-(--red-color) duration-300 ease-in-out cursor-pointer">
				<IconArrowTop />
			</MyCard>
		</div>
	);
};
