'use client'

import { v4 } from "uuid";
import { useMemo } from "react";
import { AutomationDuoToneWhite } from "@/icons";
import { useCreateAutomation } from "@/hooks/use-automations";

import { Button } from "@/components/ui/button";

import Loader from "../loader";

const CreateAutomation = () => {
    // WIP: Create the automation in the database using mutate
    const mutationId = useMemo(() => v4(), []);
    console.log(mutationId);            

    const { mutate, isPending } = useCreateAutomation(mutationId);

    return (
        <Button 
            className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]"
            onClick={() => 
                mutate({ 
                    name: 'untitled', 
                    id: mutationId, 
                    createdAt: new Date(),
                    keywords: [],
                })
            }
        >
            <Loader state={isPending}>
                <AutomationDuoToneWhite />
                <p className="lg:inline hidden">
                    Create an Automation
                </p>
            </Loader>
        </Button>
    );
};
export default CreateAutomation;