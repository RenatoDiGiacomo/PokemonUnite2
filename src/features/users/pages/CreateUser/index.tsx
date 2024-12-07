import { createRoute } from '@tanstack/react-router'
import { PrivateRoutes } from '@shared/layouts/PrivateLayout'

function CreateUserPage() {
  return (
    <div className="p-2">
      <h3>Cadastro de Usuário</h3>
    </div>
  )
}

export const CREATE_USER_PAGE_ROUTE = '/users/create'

export const CreateUserRoute = createRoute({
  path: CREATE_USER_PAGE_ROUTE,
  getParentRoute: () => PrivateRoutes,
  component: CreateUserPage,
})
