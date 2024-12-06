import { rootRoute } from '@settings/tanstack-router'
import { createRoute, Link, Outlet } from '@tanstack/react-router'
import { CREATE_USER_ROUTE, LIST_USERS_ROUTE } from '@features/users/pages'

function AdminLayout() {
  return (
    <div>
      <h1>Àrea Privada</h1>
      <div className="flex gap-2">
        <Link to={LIST_USERS_ROUTE}>Usuários</Link>
        <Link to={CREATE_USER_ROUTE}>Novo Usuário</Link>
      </div>
      <Outlet />
    </div>
  )
}

export const privateLayoutRoute = createRoute({
  id: '_private-layout',
  getParentRoute: () => rootRoute,
  component: AdminLayout,
})
