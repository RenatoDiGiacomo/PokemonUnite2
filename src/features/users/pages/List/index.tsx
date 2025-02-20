import { createRoute } from '@tanstack/react-router'
import { PrivateRoutes } from '@shared/layouts/PrivateLayout'

function ListUsersPage() {
  return (
    <div className="p-2">
      <h3>Página Inicial</h3>
    </div>
  )
}

export const LIST_USERS_PAGE_ROUTE = '/users'

export const ListUsersRoute = createRoute({
  path: LIST_USERS_PAGE_ROUTE,
  getParentRoute: () => PrivateRoutes,
  component: ListUsersPage,
})
