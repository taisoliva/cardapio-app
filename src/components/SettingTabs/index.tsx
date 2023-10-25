'use client'

import { Box, Tabs } from "@radix-ui/themes";
import { TabItem } from "./TabItem";
import { useState } from 'react';
import '@radix-ui/themes/styles.css';
import FormMenu from "../Forms/Menu";

export function SettingTabs() {

    const [currentTab, setCurrentTab] = useState('tab1')
   
    
    return (

        <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
            <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
                <TabItem value="tab1" title="Cardápio" isSelected={currentTab === 'tab1'} />
                <TabItem value="tab2" title="Categoria" isSelected={currentTab === 'tab2'} />
                <TabItem value="tab3" title="Produto" isSelected={currentTab === 'tab3'} />
            </Tabs.List>

            <Box>
                <Tabs.Content value="tab1">
                    <FormMenu />
                </Tabs.Content>

                <Tabs.Content value="tab2">
                    <div> Ola tab2 </div>
                </Tabs.Content>

                <Tabs.Content value="tab3">
                    <div> Ola tab3 </div>
                </Tabs.Content>
            </Box>
        </Tabs.Root>

    )
}