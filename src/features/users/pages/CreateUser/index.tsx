import { createRoute } from '@tanstack/react-router'
import { privateLayoutRoute } from '@shared/layouts/PrivateLayout'

function CreateUserPage() {
  return (
    <div className="p-2">
      <h3>Cadastro de Usuário</h3>
    </div>
  )
}

export const CREATE_USER_ROUTE = '/users/create'

export const createUserRoute = createRoute({
  path: CREATE_USER_ROUTE,
  getParentRoute: () => privateLayoutRoute,
  component: CreateUserPage,
})
