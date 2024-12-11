import { Icon } from '@istic-ui/react'
import { createRouter } from '@tanstack/react-router'
import { rootRoute } from '@settings/tanstack-router'
import { PrivateRoutes, PublicRoutes } from '@shared/layouts'
import {
  ForgetRoute,
  LoginRoute,
  PrivacyRoute,
} from '@shared/authentication/pages'
import { CreateUserRoute, ListUsersRoute } from '@features/users/pages'
import { MenuItemProps } from '@shared/components/MenuItem'

const routeTree = rootRoute.addChildren([
  PublicRoutes.addChildren([LoginRoute, ForgetRoute, PrivacyRoute]),
  PrivateRoutes.addChildren([ListUsersRoute, CreateUserRoute]),
])

export const router = createRouter({
  routeTree,
})

export const menuItems: MenuItemProps[] = [
  {
    icon: <Icon name="group" />,
    label: 'Usuários',
    to: '/users',
  },
]
