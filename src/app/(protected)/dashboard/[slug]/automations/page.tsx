import { Check } from "lucide-react";

import AutomationList from "@/components/global/automation-list";
import CreateAutomation from "@/components/global/create-automation";

const AutomationsPage = () => {
    // WIP: connect real automations list

    return (
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
            <div className="lg:col-span-4">
                <AutomationList />
            </div>
            <div className="lg:col-span-2">
                <div className="flex flex-col rounded-xl bg-background-80 gap-y-6 p-5 border-[1px] overflow-hidden border-in-active">
                    <div>
                        <h2 className="text-xl">Automations</h2>
                        <p className="text-text-secondary">
                            Your live automations will show here
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="flex items-start justify-between"
                            >
                                <div className="flex flex-col">
                                    <h3 className="font-medium">
                                        Direct traffic towards website
                                    </h3>
                                    <p className="text-text-secondary text-sm">
                                        October 5th 2024
                                    </p>
                                </div>
                                <Check className="text-blue-500" />
                            </div>
                        ))}
                    </div>
                    <CreateAutomation />
                </div>
            </div>
        </div>
    );
};
export default AutomationsPage;