import { RiOpenArmLine, RiWalkLine, RiGroup2Line } from 'react-icons/ri'

import { MenuItemProps } from '../MenuItem'

export const menuItems: MenuItemProps[] = [
  {
    icon: <RiOpenArmLine />,
    label: 'Exercícios',
    to: '/exercises',
  },
  {
    icon: <RiWalkLine />,
    label: 'Treino',
    to: '/training',
  },
  {
    icon: <RiGroup2Line />,
    label: 'Usuários',
    to: '/users',
  },
]
