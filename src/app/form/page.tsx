import { SettingTabs } from "@/components/SettingTabs";
import { postMenu } from "@/services/menuApi";
import { NextApiRequest, NextApiResponse } from "next";


interface Menu {
    name: string,
    type: string
}
export async function loadPostMenu(body:Menu) {
    try {
        const res = await postMenu(body)
        console.log(res)
        return res
    } catch (error : any) {
        console.log(error.response.data.message)
    }
    
    
}


export default async function Forms(req: NextApiRequest, res: NextApiResponse) {

    const data = req.body
    console.log(data)
    return (
        <div>
            <SettingTabs />
        </div>
    )
}