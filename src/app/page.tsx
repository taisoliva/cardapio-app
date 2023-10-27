import { Menu } from '@/components/Menu'
import { Sidebar } from '@/components/Sidebar'
import { getMenu } from '@/services/menuApi'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

async function getData() {
  dayjs.extend(utc)
  dayjs.extend(timezone)
  dayjs.tz.setDefault('America/Sao_Paulo')

  const BrasiliaTime = parseInt(dayjs().tz('America/Sao_Paulo').format('HH'))
  console.log(BrasiliaTime)
  const query = BrasiliaTime >= 18 || BrasiliaTime < 6 ? 'noturno' : 'diurno'
  const res = await getMenu(query)
  return res
}

export default async function Home() {
  const data = await getData()

  return (
    <>
      <Sidebar />
      <Menu data={data} />
    </>
  )
}
