import { ReactNode } from 'react';

type MainLayoutProps = {
	children: ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => {
	return <div className="max-w-7xl mx-auto font-mono py-4">{children}</div>;
};
