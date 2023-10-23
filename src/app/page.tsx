import { Sidebar } from "@/components/Sidebar"
import { Menu } from "@/protocols"
import axios from "axios"
import { PlusCircle } from "lucide-react"

async function getData() {
    const res = await axios(`${process.env.URL}/menu`)

    return res.data
}

export default async function Home() {

    const data = await getData()
    console.log(data)
    return (
        <>
            <Sidebar />
        </>
    )
}