import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { LuClipboardSignature } from 'react-icons/lu'
import { FaUserGroup } from 'react-icons/fa6'
import { SiGoogleforms } from 'react-icons/si'
import { CiSettings } from 'react-icons/ci'

export interface SideProps {
  propsInit?: boolean
}
const SideBar: React.FC = () => {
  const [open, setOpen] = useState(true)
  return (
    <>
      <aside className="h-screen">
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
              <LuClipboardSignature size={22} />
              <span className={`${!open && 'hidden'} origin-left duration-500`}>
                Boards
              </span>
            </li>
            <li
              className={`li-side-bar ${open ? 'items-center' : 'items-center justify-center pl-0'}`}
            >
              <FaUserGroup size={22} />
              <span className={`${!open && 'hidden'} origin-left duration-500`}>
                Equipes
              </span>
            </li>
            <li
              className={`li-side-bar ${open ? 'items-center' : 'items-center justify-center pl-0'}`}
            >
              <SiGoogleforms size={22} />
              <span className={`${!open && 'hidden'} origin-left duration-500`}>
                Relatórios
              </span>
            </li>
            <li
              className={`li-side-bar ${open ? 'items-center' : 'items-center justify-center pl-0'}`}
            >
              <CiSettings size={22} />
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
