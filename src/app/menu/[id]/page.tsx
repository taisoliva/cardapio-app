import Products from '@/components/Products'
import { getCategory } from '@/services/categoriaApi'
import { getMenuId } from '@/services/menuApi'
import { manipulateData } from '@/utils/manipulateData'

async function loadMenuId(id: string) {
  const res = await getMenuId(id)
  return res.data
}

async function loadCategory() {
  try {
    const res = await getCategory()
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export default async function MenuId({ params }: { params: { id: string } }) {
  const dataMenu = await loadMenuId(params.id)
  const dataCategory = await loadCategory()

  const data = manipulateData(dataMenu, dataCategory)

  return (
    <div className="">
      <h1 className="font-medium text-xl"> {dataMenu.name} </h1>
      {data.length === 0 ? (
        'Não temos ainda produtos cadastrados'
      ) : (
        <Products data={data} />
      )}
    </div>
  )
}
