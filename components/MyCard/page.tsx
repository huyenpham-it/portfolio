import React from 'react';
import styles from './page.module.scss';

type MyCardProps = React.HTMLAttributes<HTMLDivElement> & {
	children: React.ReactNode;
};

export const MyCard = ({ children, className, ...rest }: MyCardProps) => {
	return (
		<div className={`rounded-[10px] ${styles.MyCard} ${className ? className : ''}`} {...rest}>
			{children}
		</div>
	);
};
