'use client'

import { Tabs } from "@radix-ui/themes";
import { motion } from "framer-motion"

import '@radix-ui/themes/styles.css';

interface TabItemProps {
    value: string
    title: string
    isSelected?: boolean
}

export function TabItem({ value, title, isSelected }: TabItemProps) {
    return (
        <Tabs.Trigger value={value} className="relative px-1 pb-4 text-zinc-500 hover:text-orange-700 " >
            <span className="text-2xl antialiased font-medium"> {title} </span>

            {isSelected && (
                <>
                    < motion.div layoutId="activeTab" className="absolute -bottom-px left-0 right-0 h-1 bg-orange-600" />
                    <div className="absolute -bottom-px left-0 right-0 h-1 bg-orange-600 " />

                </>

            )

            }
        </Tabs.Trigger>
    )
}