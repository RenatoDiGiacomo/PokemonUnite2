import { createRoute } from '@tanstack/react-router'
import { PrivateRoutes } from '@shared/layouts/PrivateLayout'

function ListUsersPage() {
  return (
    <div className="p-2">
      <h3>Listagem de usuários</h3>
    </div>
  )
}

export const LIST_USERS_ROUTE = '/users'

export const listUsersRoute = createRoute({
  path: LIST_USERS_ROUTE,
  getParentRoute: () => PrivateRoutes,
  component: ListUsersPage,
})
