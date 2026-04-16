import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'



export default function Nav() {
  return (
    <Disclosure as="nav" className="relative w-full ml-0 navigation">
      <div className="mx-auto  px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                    key="home"
                    to="/"
                    
                    className='  text-gray-300 hover:bg-white/5 hover:text-white
                      rounded-md px-3 py-2 text-sm font-medium'
                   >
                    Home
                  </Link>
              </div>
              
            </div>
            {/* <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                    key="about"
                    to="/about"
                    
                    className='  text-gray-300 hover:bg-white/5 hover:text-white
                      rounded-md px-3 py-2 text-sm font-medium'
                   >
                    About
                  </Link>
              </div>
              
            </div> */}

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                    key="peojects"
                    to="/projects"
                    
                    className='  text-gray-300 hover:bg-white/5 hover:text-white
                      rounded-md px-3 py-2 text-sm font-medium'
                   >
                    Projects
                  </Link>
              </div>
              
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                    key="contactme"
                    to="/reachme"
                    
                    className='  text-gray-300 hover:bg-white/5 hover:text-white
                      rounded-md px-3 py-2 text-sm font-medium'
                   >
                    Contact me
                  </Link>
              </div>
              
            </div>

          
          </div>
        
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <DisclosureButton
              key="home"
              as="span"
            
              aria-current= 'page'
              className=' text-gray-300 hover:bg-white/5 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
            
            >
            <Link to="/">Home</Link>
            
            </DisclosureButton>
            <DisclosureButton
              key="about"
              as="span"
            
              aria-current= 'page'
              className=' text-gray-300 hover:bg-white/5 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
            
            >
            <Link to="/about">About</Link>
            
            </DisclosureButton>

            <DisclosureButton
              key="projects"
              as="span"
              aria-current= 'page'
              className=' text-gray-300 hover:bg-white/5 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
            >
            <Link to="/projects"> Projects</Link>
            </DisclosureButton>

            <DisclosureButton
              key="contactme"
              as="span"
              aria-current= 'page'
              className=' text-gray-300 hover:bg-white/5 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
            >
            <Link to="/reachme">Contact me</Link>
            </DisclosureButton>

        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
