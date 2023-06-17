import Layout from '@/components/Layout';
import './globals.css';

export const metadata = {
	title: 'Buildoors',
	description: 'The NFT Collection for Buildoors',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
