import Infobar from "@/components/global/infobar";
import Sidebar from "@/components/global/sidebar";

type DashboardProps = {
    children: React.ReactNode
    params: { slug: string }
}
const DashboardLayout = ({ children, params }: DashboardProps) => {
    // Query
    // WIP: Query client fetch data

    return (
        <div className="p-3">
            {/* Sidebar */}
            <Sidebar slug={params.slug} />
            <div className="lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto">
                <Infobar slug={params.slug} />
                {children}
            </div>
        </div>
    );
};
export default DashboardLayout;