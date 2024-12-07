import { PencilDuoToneBlack } from "@/icons";
import { ChevronRight } from "lucide-react";
import ActivateAutomationButton from "../../activate-automation-button";

type AutomationBreadCrumbsProps = {
    id: string;
};

const AutomationBreadCrumbs = ({ id }: AutomationBreadCrumbsProps) => {
    // WIP: Get the automation Data
    return (
        <div className="rounded-full w-full p-5 bg-[#18181B1A] flex items-center">
            <div className="flex items-center gap-x-3 min-w-0">
                <p className="text-[#9B9CA0] truncate">Automations</p>
                <ChevronRight color="#9B9CA0" className="flex-shrink-0" />
                <span className="flex gap-x-3 items-center min-w-0">
                    {/* WIP:Show the editing data */}
                    <p className="text-[#9B9CA0] truncate">This is the automation Title</p>
                    <span className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-2">
                        <PencilDuoToneBlack className="size-[18px]" />
                    </span>
                </span>
            </div>
            <div className="flex items-center gap-x-5 ml-auto">
                <p className="hidden md:block text-text-secondary/60 text-sm truncate min-w-0">
                    All updates are automatically saved
                </p>
                <div className="flex gap-x-5 flex-shrink-0">
                    <p className="text-text-secondary text-sm truncate min-w-0">Changes Saved</p>
                </div>
            </div>
            <ActivateAutomationButton />
        </div>
    );
};
export default AutomationBreadCrumbs;