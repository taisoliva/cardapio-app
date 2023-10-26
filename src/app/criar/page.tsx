import { SettingTabs } from '@/components/SettingTabs'
import { getCategory } from '@/services/categoriaApi'
import { getAllMenus } from '@/services/menuApi'

async function loadMenus() {
  try {
    const res = await getAllMenus()
    return res.data
  } catch (error) {
    console.log(error)
  }
}

async function loadCategory() {
  try {
    const res = await getCategory()
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export default async function Forms() {
  const dataMenus = await loadMenus()
  const dataCategory = await loadCategory()

  return <SettingTabs dataMenus={dataMenus} dataCategory={dataCategory} />
}
