import MenuItem from '../MenuItem'
import Logo from '../Logo'

import { menuItems } from './Menu.constants'

interface MenuProps {
  opened: boolean
  toggle: () => void
}

function Menu({ opened, toggle }: Readonly<MenuProps>) {
  return (
    <>
      <div
        className={`absolute size-full transition-opacity bg-black ${opened ? 'opacity-0 hidden' : 'opacity-70'} md:bg-transparent`}
        onClick={toggle}
      ></div>
      <aside
        className={`bg-white h-full transition-all w-72 absolute ${opened ? '-left-72' : 'left-0'} md:relative md:left-0`}
      >
        <Logo />
        <div className="flex flex-col pt-6">
          {menuItems.map((item) => (
            <MenuItem key={item.to} {...item} />
          ))}
        </div>
      </aside>
    </>
  )
}

export default Menu
