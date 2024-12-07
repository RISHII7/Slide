import { Button } from "@/components/ui/button";

type IntegrationCardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    strategy: 'INSTAGRAM' | 'CRM';
};

const IntegrationCard = ({ description, icon, strategy, title }: IntegrationCardProps) => {
    return (
        <div className="bg-background-90 border border-[#1d2c70]/20 rounded-2xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0">
                {icon}
            </div>
            <div className="flex flex-col flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed p-1 sm:p-0">
                    {description}
                </p>
            </div>
            <Button 
                className="bg-[#3353CC] hover:bg-[#2944B0] text-white rounded-full px-4 sm:px-6 py-1 sm:py-2 flex-shrink-0"
            >
                Connect
            </Button>
        </div>
    );
};

export default IntegrationCard;
