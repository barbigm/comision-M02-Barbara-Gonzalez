import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/auth.context'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Perfil', href: '/profile', current: true },
  { name: 'Crear Post', href: '/createpost', current: true },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavbarPrivate() {
  const { signout } = useAuth()
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="data:image/png;base64,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"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Mi Perfil
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/createpost"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Crear Post
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            onClick={()=> signout()}
                            to="/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Salir
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
