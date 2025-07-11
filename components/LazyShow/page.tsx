'use client';

import { useEffect, useRef, useState } from 'react';

export const LazyShow = ({
	children,
	delayIndex = 0, // mỗi item delay theo thứ tự: 0, 1, 2, 3...
	delayStep = 0.2, // giây delay giữa mỗi item
	direction = 'vertical'
}: {
	children: React.ReactNode;
	delayIndex?: number;
	delayStep?: number;
	direction?: 'vertical' | 'horizontal';
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect(); // chỉ chạy 1 lần
				}
			},
			{ threshold: 0.1 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, []);

	const hiddenTranslateClass = direction === 'horizontal' ? 'translate-x-8' : 'translate-y-8';

	return (
		<div
			ref={ref}
			style={{
				transitionDelay: `${delayIndex * delayStep}s`
			}}
			className={`transition-all duration-500 ease-out' 
				${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${hiddenTranslateClass}`}
				`}
		>
			{children}
		</div>
	);
};
