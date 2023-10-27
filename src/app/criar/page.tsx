import { SettingTabs } from '@/components/SettingTabs'
import { getCategory } from '@/services/categoriaApi'
import { getAllMenus } from '@/services/menuApi'

async function loadMenus() {
  const res = await getAllMenus()
  return res
}

async function loadCategory() {
  const res = await getCategory()
  return res
}

export default async function Forms() {
  const dataMenus = await loadMenus()
  const dataCategory = await loadCategory()

  return <SettingTabs dataMenus={dataMenus} dataCategory={dataCategory} />
}
