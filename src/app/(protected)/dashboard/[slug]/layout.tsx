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
            <Sidebar slug={params.slug} />
            {children}
        </div>
    );
};
export default DashboardLayout;