'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ReactQueryProviderProps = {
    children: React.ReactNode
};

const client = new QueryClient();

const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
};
export default ReactQueryProvider;