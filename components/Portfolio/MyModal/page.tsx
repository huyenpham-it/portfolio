import { IconArrowRight } from '@/components/Icons/page';
import { MyCard } from '@/components/MyCard/page';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';

type Props = {
	project: any;
	open: boolean;
	onClose: () => void;
};

const MyModal: React.FC<Props> = ({ project = {}, open = false, onClose }) => {
	return (
		<Transition appear show={open} as={Fragment}>
			<Dialog as="div" className="relative z-1000" onClose={onClose}>
				<TransitionChild
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 backdrop-blur-sm" />
				</TransitionChild>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<TransitionChild
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<DialogPanel className="global-font-color w-[95%] overflow-y-auto bg-color p-0 rounded-lg">
								<DialogTitle
									as="h3"
									className="flex items-center shrink-0 antialiased justify-between p-5 lg:p-10"
								>
									<div className="bg-gradient-to-r from-(--red-color) to-(--yellow-color) bg-clip-text text-transparent text-base">
										@dieuhuyenpham
									</div>
									<button
										className="h-7 w-7 pink-color hover:!text-(--red-color) duration-300 ease-in-out cursor-pointer focus:outline-none"
										onClick={onClose}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</DialogTitle>

								<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-12 p-10 lg:p-20 !pt-0">
									<Image
										src={project.image}
										width={1000}
										height={1000}
										className="lg:col-span-2 rounded-xl"
										alt=""
									/>

									<div className="text-left lg:col-span-1 flex flex-col items-start gap-4 pt-5">
										<div className="flex flex-col gap-1">
											<h2 className="red-color text-xl font-semibold">{project.title || ''}</h2>
											<h2 className="pink-color text-2xl font-semibold">
												{project.description || ''}
											</h2>
										</div>
										<p className="whitespace-pre-line">{project.detail || ''}</p>
										<p>{project.notice || ''}</p>
										{project.link && (
											<Link
												href={project.link}
												target="_blank"
												className="hover:-translate-y-1 duration-300 ease-in-out"
											>
												<MyCard>
													<div className="flex items-center justify-center gap-2 bg-gradient-to-r from-(--red-color) to-(--yellow-color) bg-clip-text text-transparent duration-300 ease-in-out font-semibold uppercase px-5 py-4">
														View website
														<span className="yellow-color">
															<IconArrowRight />
														</span>
													</div>
												</MyCard>
											</Link>
										)}
									</div>
								</div>
							</DialogPanel>
						</TransitionChild>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default React.memo(MyModal);
