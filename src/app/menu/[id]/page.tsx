import { getMenuId } from "@/services/menuApi"


async function  loadMenuId(id: string) {
   const res = await getMenuId(id)
   return res.data
   
}

async function loadCategorias() {
   
}

export default async function MenuId({ params }: { params: { id: string } }) {

   const data = await loadMenuId(params.id)
   console.log(data)

      return (
         <div className="w-4/5 m-auto ">
            <h1> {data.name}</h1>

            <div>
               <img src={data.products[0].image}/>
            </div>

            <div>
               <img src={data.products[0].image}/>
            </div>
         </div>
      )
   }