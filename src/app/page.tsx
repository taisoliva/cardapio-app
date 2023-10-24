'use client'

import { Menu } from "@/components/Menu"
import { Sidebar } from "@/components/Sidebar"
import { getMenu } from "@/services/menuApi"
import { useEffect, useState } from "react"

async function getData() {

    const hour = new Date().getHours()
    let type = ''
    
    if(hour >= 18 || hour < 6){
        type = 'noturno'
    } else {
        type = 'diurno'
    }   

    const res = await getMenu(type)
    return res.data
}

export default async function Home() {

    const data = await getData()

    return (
        <>
            <Sidebar />
            <Menu data={data}/>
        </>
    )
}