import styles from './page.module.scss';

export const Intro = () => {
	return (
		<div
			id="intro"
			className="global-font-color section-separator place-items-center p-5 sm:p-10 lg:p-20 scroll-mt-20 lg:scroll-mt-10"
		>
			<h1 className="bg-gradient-to-r from-(--red-color) to-(--yellow-color) bg-clip-text text-transparent text-3xl sm:text-5xl text-center font-bold w-fit mb-6">
				Welcome to my world
			</h1>
			<h1 className="pink-color text-md sm:text-xl text-center font-bold uppercase mb-4">I'm a</h1>
			<section className={styles.container}>
				<section className={styles.sectionContainer}>
					{/* ==================== ZigZag Border Animation ==================== */}
					<div className={styles.zigzagContainer}>
						{['C', 'O', 'D', 'E', 'R'].map((item, index) => (
							<div
								key={index}
								className={styles.zigzagItem}
								style={{ '--i': index } as React.CSSProperties}
							>
								<span>
									<b>{item}</b>
								</span>
							</div>
						))}
					</div>
					<div className={styles.zigzagContainer}>
						{['C', 'O', 'D', 'E', 'R'].map((item, index) => (
							<div
								key={index}
								className={styles.zigzagItem}
								style={{ '--i': index } as React.CSSProperties}
							></div>
						))}
					</div>
				</section>
			</section>
			<div className="w-full max-w-[550px] text-center mt-10 sm:mt-15">
				I'm a Front End Developer with almost 3 years of experience in building responsive, user-friendly web
				applications. My job is to turn dry lines of code into beautiful websites. In addition, I also use Canva
				for simple design. In the future, I aim to learn and develop UI/UX design skills to create more engaging
				and intuitive user experiences.
			</div>
		</div>
	);
};
