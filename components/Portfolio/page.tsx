'use client';

import { designProjects, websiteProjects } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MyCard } from '../page';
import MyModal from './MyModal/page';
import styles from './page.module.scss';

export const Portfolio = () => {
	const [show, setShow] = useState(false);
	const [project, setProject] = useState({});

	const handleShow = (project: any) => {
		setProject(project);
		setShow(true);
	};

	return (
		<>
			<div
				id="projects"
				className="global-font-color section-separator flex flex-col items-center p-5 sm:p-10 lg:p-20 scroll-mt-20 lg:scroll-mt-10"
			>
				<h2 className="bg-gradient-to-r from-(--red-color) to-(--yellow-color) bg-clip-text text-transparent text-3xl sm:text-5xl font-bold uppercase w-fit mb-4">
					My Projects
				</h2>
				<p className="text-md sm:text-xl text-center pink-color">
					I design and develop beautifully simple things, because I love them.
				</p>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 sm:pt-15">
					{websiteProjects.map((project: any, index: number) => (
						<MyCard key={index} className="cursor-pointer">
							<div className="hover:scale-101 duration-300 ease-in-out">
								<Image
									src={project.image}
									width={400}
									height={400}
									className={styles.projectImage}
									alt=""
									onClick={() => handleShow(project)}
								/>
								<div className="flex flex-col gap-3 p-6">
									<div className="red-color uppercase">{project.type}</div>
									<Link href={project.link} target="_blank">
										<h2 className="text-xl font-semibold">
											{project.title} ~ {project.description}
										</h2>
									</Link>
								</div>
							</div>
						</MyCard>
					))}
					{designProjects.map((project: any, index: number) => (
						<MyCard key={index} className="cursor-pointer">
							<div className="hover:scale-101 duration-300 ease-in-out">
								<Image
									src={project.image}
									width={400}
									height={400}
									className={styles.projectImage}
									alt=""
									onClick={() => handleShow(project)}
								/>
								<div className="flex flex-col gap-3 p-6">
									<div className="red-color uppercase">{project.type}</div>
									<h2 className="text-xl font-semibold">
										{project.title} ~ {project.description}
									</h2>
								</div>
							</div>
						</MyCard>
					))}
				</div>
			</div>

			<MyModal project={project} open={show} onClose={() => setShow(!show)} />
		</>
	);
};
