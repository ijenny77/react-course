import { useState } from "react"
import React from 'react'

const Nav_items = [
  { label:'All tasks', filter:'tasks',icon:'◈' },
  { label:'Today', filter:'today',icon:'◎' },
  { label:'Completed', filter:'completed',icon:'◉' }
]
const Projects =[
  {label:'All', filter:'all'},
  {label:'Work', filter:'work'},
  {label:'Learning', filter:'learning'},
  {label:'Personal', filter:'personal'},
]
const SideBar = () => {
    const [active,setActive] = useState()
  return (
    <div className= "bg-[#17171A] pl-6 w-68 h-screen ">
        <p className='text-white py-10 text-2xl'><span className='text-[#7C6AFF]'>⬡</span> TaskFlow</p>
        <div className='border border-[#5C5C6B] py-2 px-4 rounded-xl flex gap-6 w-fit'>

            <div className='flex flex-col'>
              <span className='text-[#F0F0F2] text-xl font-semibold'>7</span>
              <span className='text-[#5C5C6B] text-xs'>PENDING</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[#F0F0F2] text-xl font-semibold'>0</span>
              <span className='text-[#5C5C6B] text-xs'>DONE</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[#F56565] text-xl font-semibold '>4</span>
              <span className='text-[#5C5C6B] text-xs'>URGENT</span>
            </div>

        </div>
        <button className='bg-[#7C6AFF] text-white rounded-lg px-6 py-2 flex gap-16 my-6'><span>+ New task </span><span>&#8984;K</span></button>
        <p className='text-[#4E505B] py-2'>Views</p>
        {Nav_items.map(item =>(
          <button key={item.filter} onClick={()=> setActive(item.filter)} className={`flex flex-row gap-8 hover:bg-[#3a3a3d] px-4 w-58 py-2 rounded-lg ${active === item.filter ? 'text-[#9585FF]' : 'text-white' }`}>
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}

        <br/>
        <p className='text-[#4E505B] py-2'>Projects</p>
        {Projects.map(item => (
          <button key={item.filter} onClick={() => setActive(item.filter)} className={`flex gap-8 hover:bg-[#3a3a3d] px-6 w-58 py-2 rounded-lg  ${active === item.filter ? 'text-[#9585FF]' : 'text-white' }`}>
            {item.label}
          </button>
        ))}
    </div>
  )
}

export default SideBar