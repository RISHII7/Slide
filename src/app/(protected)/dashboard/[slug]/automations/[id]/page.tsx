import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

import { Warning } from "@/icons";
import { getAutomationInfo } from "@/actions/automations";
import { prefetchUserAutomation } from "@/react-query/prefetch";


import Trigger from "@/components/global/automations/trigger";
import AutomationBreadCrumbs from "@/components/global/bread-crumbs/automations";

type AutomationIdPageProps = {
    params: { id: string }
};


export async function generateMetaData({ params }: { params: { id: string } }) {
    const info = await getAutomationInfo(params.id);

    return {
        title: info.data?.name
    }
}

const AutomationIdPage = async ({ params }: AutomationIdPageProps) => {
    const query = new QueryClient();
    await prefetchUserAutomation(query, params.id)

    return (
        <HydrationBoundary state={dehydrate(query)}>
            <div className="flex flex-col items-center gap-y-20">
                <AutomationBreadCrumbs id={params.id} />
                <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
                    <div className="flex gap-x-2">
                        <Warning />
                        When...
                    </div>
                    <Trigger id={params.id} />
                </div>
            </div>
        </HydrationBoundary>
    );
};
export default AutomationIdPage;