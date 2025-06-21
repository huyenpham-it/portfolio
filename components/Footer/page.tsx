import Image from 'next/image';

export const Footer = () => {
	return (
		<div className="global-font-color section-separator flex flex-col items-center justify-center gap-4 p-10 lg:p-20 !pb-4">
			<span className="w-20 h-20 bg-red-color flex items-center justify-center rounded-full -start-3 ring-2 duration-300 ease-in-out">
				<Image className="rounded-full shadow-lg" src="/avatar.jpg" width={100} height={100} alt="" />
			</span>
			<div className="text-xs pink-color">
				© Copyright 2025. All rights reserved by <span className='red-color'>@dieuhuyenpham</span>
			</div>
		</div>
	);
};
