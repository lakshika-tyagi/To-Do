import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from '../../Header_utilities/Icon/Icon';
import Search from '../../Header_utilities/Search/Search';
import Settings from '../../Header_utilities/Settings/Settings';
import Help from '../../Header_utilities/Help/Help';
import New from '../../Header_utilities/New/New';
import Profile from '../../Header_utilities/Profile/Profile';

function Header() {
  const [searchValue, setSearchValue] = useState('');
  const [openIcon, setOpenIcon] = useState("none");

  return (
    <>
      <header className='shadow top-0 ' >
        <div className='flex items-center justify-between bg-[#2564CF] py-2 outline-none' >

          {/* to do and svg */}
          <div className='bg-[#2564CF] flex items-center gap-4 pl-4'>

            <svg className='cursor-pointer' onClick={() => {
              openIcon === "icon" ? setOpenIcon("none") : setOpenIcon("icon")
            }
            } xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid3x3-icon lucide-grid-3x3"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M3 15h18" /><path d="M9 3v18" /><path d="M15 3v18" /></svg>
            <Link to='/' className='flex items-center no-underline hover:underline w-fit font-medium text-gray-200 h-full text-sm/7'>To Do</Link>
          </div>

          {/* search bar */}
          
            <div className=' bg-white flex-col shadow-none rounded-md hover:shadow-lg'>
              <button >
                  <svg className='rotate-90 py-1' xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 24 24" fill="none" stroke="#2564CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>  
              </button>
              <input type="search" name="search" placeholder='' className='ml-2 right-0 outline-none' onChange={(e) => setSearchValue(() => e.target.value)} />
              <Search value={searchValue} />
            </div>
          

          {/* other options */}
          <div className='bg-[#2564CF] flex items-center pr-3'>
            <div className='px-3 hover:bg-sky-800' onClick={() => {
              openIcon === "settings" ? setOpenIcon("none") : setOpenIcon("settings")
            }
            }
            >
              <div className='flex items-center m-auto justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E5E7EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-icon lucide-settings"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
            </div>

            <div className='px-3 hover:bg-sky-800 text-gray-300 text-2xl font-normal' onClick={() => {
              openIcon === "help" ? setOpenIcon("none") : setOpenIcon("help")
            }
            }>
              <div className=' flex items-center m-auto justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E5E7EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
              </div>
            </div>

            <div className='px-3 hover:bg-sky-800 text-gray-300' onClick={() => {
              openIcon === "new" ? setOpenIcon("none") : setOpenIcon("new")
            }
            } >
              <div className=' flex items-center m-auto justify-center'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E5E7EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-megaphone-icon lucide-megaphone"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"/><path d="M8 6v8"/></svg> 
              </div>
            </div>

            <div className='px-3 hover:bg-sky-800 flex flex-end' onClick={() => {
              openIcon === "profile" ? setOpenIcon("none") : setOpenIcon("profile")
            }
            }>
              <div className='flex justify-center items-center m-auto '>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E5E7EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-icon lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
              </div>
            </div>
          </div>

        </div>

      </header>
      <Icon open={openIcon === "icon"} />
      <Settings open={openIcon === "settings"} />
      <New open={openIcon === "new"} />
      <Help open={openIcon === "help"} />
      <Profile open={openIcon === "profile"} />
    </>
  )
}

export default Header
