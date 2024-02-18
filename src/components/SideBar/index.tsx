import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { LuKanban, LuClipboardEdit } from 'react-icons/lu'
import { AiOutlineTeam } from 'react-icons/ai'
import { IoSettingsOutline } from 'react-icons/io5'

export interface SideProps {
  propsInit?: boolean
}
const SideBar: React.FC = () => {
  const [open, setOpen] = useState(true)
  return (
    <>
      <aside className="">
        <nav className={`${open ? 'w-56' : 'w-16'} nav-side-Bar`}>
          <div
            className={`flex py-3 ${open ? 'justify-end' : 'justify-center'}`}
            onClick={() => setOpen(!open)}
          >
            <HiMenuAlt3 size={26} className="cursor-pointer" />
          </div>
          <ul>
            <li
              className={`li-side-bar ${open ? 'items-center' : 'items-center justify-center pl-0'}`}
            >
              <LuKanban size={22} />
              <span className={`${!open && 'hidden'} origin-left duration-500`}>
                Boards
              </span>
            </li>
            <li
              className={`li-side-bar ${open ? 'items-center' : 'items-center justify-center pl-0'}`}
            >
              <AiOutlineTeam size={22} />
              <span className={`${!open && 'hidden'} origin-left duration-500`}>
                Equipes
              </span>
            </li>
            <li
              className={`li-side-bar ${open ? 'items-center' : 'items-center justify-center pl-0'}`}
            >
              <LuClipboardEdit size={22} />
              <span className={`${!open && 'hidden'} origin-left duration-500`}>
                Relatórios
              </span>
            </li>
            <li
              className={`li-side-bar ${open ? 'items-center' : 'items-center justify-center pl-0'}`}
            >
              <IoSettingsOutline size={22} />
              <span className={`${!open && 'hidden'} origin-left duration-500`}>
                Ajustes
              </span>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default SideBar
