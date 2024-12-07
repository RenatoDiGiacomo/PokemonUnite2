import { rootRoute } from '@settings/tanstack-router'
import { createRoute, Link, Outlet } from '@tanstack/react-router'
import {
  CREATE_USER_PAGE_ROUTE,
  LIST_USERS_PAGE_ROUTE,
} from '@features/users/pages'

function PrivateLayout() {
  return (
    <div>
      <h1>Àrea Privada</h1>
      <div className="flex gap-2">
        <Link to={LIST_USERS_PAGE_ROUTE}>Usuários</Link>
        <Link to={CREATE_USER_PAGE_ROUTE}>Novo Usuário</Link>
      </div>
      <Outlet />
    </div>
  )
}

export const PrivateRoutes = createRoute({
  id: '_private-layout',
  getParentRoute: () => rootRoute,
  component: PrivateLayout,
})
