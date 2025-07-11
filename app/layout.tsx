import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import '@/styles/page.scss';

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin', 'latin-ext'],
	weight: ['400', '500', '600', '700', '800', '900'],
	display: 'swap',
	fallback: ['sans-serif']
});

export const metadata: Metadata = {
	title: 'Huyen Pham Portfolio',
	description: "Huyen Pham's Portfolio",
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
	},
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} antialiased`}>{children}</body>
		</html>
	);
}
