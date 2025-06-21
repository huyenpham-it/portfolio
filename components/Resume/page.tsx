'use client';

import { experiences, skills } from '@/utils/constants';
import Image from 'next/image';
import { useState } from 'react';
import { MyCard } from '../page';

export const Resume = () => {
	const [hovered, setHovered] = useState<number | null>(null);

	return (
		<div id="resume" className="global-font-color section-separator flex flex-col items-center p-10 lg:p-20">
			<div className="bg-gradient-to-r from-(--red-color) to-(--yellow-color) bg-clip-text text-transparent uppercase mb-4">
				2.5+ Years of Experience
			</div>
			<h2 className="text-5xl font-bold pink-color text-shadow-(--text-shadow)/30 mb-4">My Resume</h2>
			<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 pt-15">
				<div>
					<h1 className="pink-color text-2xl font-semibold mb-10">Education / Experience</h1>
					<ol className="relative border-s-2 border-(--hr-color)">
						{experiences.map((experience: any, index: number) => (
							<li key={index} className="mb-10 ms-6">
								<span
									className={`${hovered === index ? 'red-color' : ''} absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-2 duration-300 ease-in-out`}
								>
									<Image
										className="rounded-full shadow-lg"
										src="/avatar.jpg"
										width={24}
										height={24}
										alt=""
									/>
								</span>
								<MyCard>
									<div
										className="p-6"
										onMouseEnter={() => setHovered(index)}
										onMouseLeave={() => setHovered(null)}
									>
										<time className="text-sm red-color shrink-0">{experience.time}</time>
										<div className="flex flex-col gap-6">
											<div>
												<h2 className="bg-gradient-to-r from-(--red-color) to-(--yellow-color) bg-clip-text text-transparent text-xl font-semibold w-fit">
													{experience.title}
												</h2>
												<div className="pink-color text-sm pt-2">{experience.place}</div>
											</div>
											<div>
												{experience.content.split('\n').map((line: string, index: number) => (
													<p key={index} className="mb-2">
														{line}
													</p>
												))}
											</div>
										</div>
									</div>
								</MyCard>
							</li>
						))}
					</ol>
				</div>
				<div>
					<h1 className="pink-color text-2xl font-semibold mb-10">Skill</h1>
					<div className="flex flex-wrap gap-5">
						{skills.map((skill, index) => (
							<div key={index} className="hover:-translate-y-1 duration-300 ease-in-out">
								<MyCard>
									<div className="w-fit bg-gradient-to-r from-(--red-color) to-(--yellow-color) bg-clip-text text-transparent font-semibold uppercase p-4">
										{skill}
									</div>
								</MyCard>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
