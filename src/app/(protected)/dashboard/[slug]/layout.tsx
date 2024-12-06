type DashboardProps = {
    children: React.ReactNode;
    params: { slug: string }
}
const DashboardLayout = ({ children, params }: DashboardProps) => {
    // Query

    return (
        <div>DashboardLayout</div>
    );
};
export default DashboardLayout;