import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

import { prefetchUserAutomations, prefetchUserProfile } from "@/react-query/prefetch";

import Infobar from "@/components/global/infobar";
import Sidebar from "@/components/global/sidebar";

type DashboardProps = {
    children: React.ReactNode
    params: { slug: string }
}
const DashboardLayout = async ({ children, params }: DashboardProps) => {
    // Query
    // WIP: Query client fetch data
    const query = new QueryClient();
    
    await prefetchUserProfile(query);
    await prefetchUserAutomations(query)

    return (
        <HydrationBoundary state={dehydrate(query)}>
            <div className="p-3">
                {/* Sidebar */}
                <Sidebar slug={params.slug} />
                <div className="lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto">
                    <Infobar slug={params.slug} />
                    {children}
                </div>
            </div>
        </HydrationBoundary>
    );
};
export default DashboardLayout;