'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import WalletContextProvider from './WalletContextProvider';

const colors = {
	background: '#1F1F1F',
	accent: '#833BBE',
	bodyText: 'rgba(255, 255, 255, 0.75)',
};

const theme = extendTheme({ colors });

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<ChakraProvider theme={theme}>
			<WalletContextProvider>{children}</WalletContextProvider>
		</ChakraProvider>
	);
};

export default Layout;
