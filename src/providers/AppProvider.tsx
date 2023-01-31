import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { LoadingFallback, ErrorFallback } from '@/components/fallbacks';

interface AppProviderProps {
	children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<Suspense fallback={<LoadingFallback />}>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<HelmetProvider>{children}</HelmetProvider>
			</ErrorBoundary>
		</Suspense>
	);
};
