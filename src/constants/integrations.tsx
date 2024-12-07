import { InstagramDuoToneBlue, SalesForceDuoToneBlue } from "@/icons"

type Props = {
    title: string
    icon: React.ReactNode
    description: string
    strategy: 'INSTAGRAM' | 'CRM'
}

export const INTEGRATION_CARDS: Props[] = [
    {
        title: 'Connect Instagram',
        description:
            'Automate your Instagram DMs and comments with AI-powered responses.',
        icon: <InstagramDuoToneBlue />,
        strategy: 'INSTAGRAM',
    },
    {
        title: 'Connect Salesforce',
        description:
            'Seamlessly sync your Instagram leads with Salesforce CRM.',
        icon: <SalesForceDuoToneBlue />,
        strategy: 'CRM',
    },
];