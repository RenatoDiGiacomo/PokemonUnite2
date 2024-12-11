import {
  createRootRoute,
  createRouter,
  Link,
  Outlet,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Icon } from '@istic-ui/react'
import { PrivateRoutes, PublicRoutes } from '@shared/layouts'
import {
  ForgetRoute,
  LoginRoute,
  PrivacyRoute,
} from '@shared/authentication/pages'
import { CreateUserRoute, ListUsersRoute } from '@features/users/pages'
import { MenuItemProps } from '@shared/components/MenuItem'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => (
    <div>
      <p>This is the notFoundComponent configured on root route</p>
      <Link to="/">Start Over</Link>
    </div>
  ),
})

const routeTree = rootRoute.addChildren([
  PublicRoutes.addChildren([LoginRoute, ForgetRoute, PrivacyRoute]),
  PrivateRoutes.addChildren([ListUsersRoute, CreateUserRoute]),
])

const router = createRouter({
  routeTree,
})

const menuItems: MenuItemProps[] = [
  {
    icon: <Icon name="group" />,
    label: 'Usuários',
    to: '/users',
  },
]

export { rootRoute, router, menuItems }
