import { Sidebar } from "@/components/Sidebar"
import { Menu } from "@/protocols"
import axios from "axios"


async function getData() {

    const hour = new Date().getHours()
    let type = ''
    
    if(hour >= 18 || hour < 6){
        type = 'noturno'
    } else {
        type = 'diurno'
    }   

    const res = await axios(`${process.env.URL}/menu?type=${type}`)
    return res.data
}

export default async function Home() {

    const data = await getData()
   
    return (
        <>
            <Sidebar />
            <p> Ola </p>
        </>
    )
}