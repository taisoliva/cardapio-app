'use client'

import { Box, Tabs } from '@radix-ui/themes'
import { TabItem } from './TabItem'
import { useState } from 'react'
import '@radix-ui/themes/styles.css'
import FormMenu from '../Forms/Menu'
import FormCategoria from '../Forms/Categoria'
import FormProdutos from '../Forms/Produtos'
import { CategoryProtocol, MenuProtocol } from '@/protocols'

interface Props {
  dataMenus: [MenuProtocol]
  dataCategory: [CategoryProtocol]
}

export function SettingTabs({ dataMenus, dataCategory }: Props) {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          value="tab1"
          title="Cardápio"
          isSelected={currentTab === 'tab1'}
        />
        <TabItem
          value="tab2"
          title="Categoria"
          isSelected={currentTab === 'tab2'}
        />
        <TabItem
          value="tab3"
          title="Produto"
          isSelected={currentTab === 'tab3'}
        />
      </Tabs.List>

      <Box>
        <Tabs.Content value="tab1">
          <FormMenu />
        </Tabs.Content>

        <Tabs.Content value="tab2">
          <FormCategoria />
        </Tabs.Content>

        <Tabs.Content value="tab3">
          <FormProdutos dataMenus={dataMenus} dataCategory={dataCategory} />
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  )
}
