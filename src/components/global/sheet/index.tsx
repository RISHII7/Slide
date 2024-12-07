import { Sheet as ShadcnSheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type SheetProps = {
    trigger: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    side: 'left' | 'right'
}

const Sheet = ({ children, trigger, className, side }: SheetProps) => {
    return (
        <ShadcnSheet >
            <SheetTrigger className={className}>
                {trigger}
            </SheetTrigger>
            <SheetContent side={side} className="p-0" >
                {children}
            </SheetContent>
        </ShadcnSheet>
    );
};
export default Sheet;