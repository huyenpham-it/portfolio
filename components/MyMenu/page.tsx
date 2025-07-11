'use client';

import { componentPage } from '@/utils/constants';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import Link from 'next/link';
import { useEffect } from 'react';
import { LazyShow, Menu, MyCard } from '../page';

export const MyMenu = () => {
	const handleBodyScroll = (isOpen: boolean) => {
		if (typeof window !== 'undefined') {
			const menu = document.querySelector('.popover-button');
			isOpen ? menu?.classList.add('popover-open') : menu?.classList.remove('popover-open');
			document.body.style.overflow = isOpen ? 'hidden' : '';
		}
	};

	return (
		<Popover className="rounded-full w-fit h-fit">
			{({ open, close }) => {
				// Chặn scroll
				useEffect(() => {
					handleBodyScroll(open);
					return () => handleBodyScroll(false); // reset khi component unmount
				}, [open]);

				return (
					<>
						<PopoverButton className="popover-button global-font-color rounded-full cursor-pointer outline-none duration-300 ease-in-out">
							<Menu />
						</PopoverButton>

						<PopoverPanel
							transition
							className="popover-panel fixed right-0 z-10 mt-5 flex w-fit px-4 transition data-closed:translate-x-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
						>
							<div className="w-fit flex-auto overflow-hidden rounded-3xl text-sm/6 shadow-lg ring-1 ring-gray-900/5">
								<div className="flex flex-col gap-4 p-4">
									{componentPage.map((item: any, index: number) => (
										<Link
											key={index}
											href={item.path}
											onClick={() => {
												document
													.getElementById(item.path)
													?.scrollIntoView({ behavior: 'smooth' });
												close();
											}}
										>
											<LazyShow delayIndex={index} direction="horizontal">
												<MyCard className="p-4 text-center">
													<span className="bg-gradient-to-r from-(--red-color) to-(--yellow-color) bg-clip-text text-xl font-regular text-transparent">
														{item.title}
													</span>
												</MyCard>
											</LazyShow>
										</Link>
									))}
								</div>
							</div>
						</PopoverPanel>
					</>
				);
			}}
		</Popover>
	);
};
