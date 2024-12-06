import { createRoute } from '@tanstack/react-router'
import { publicLayoutRoute } from '@shared/layouts/PublicLayout'
import LoginForm from '@features/auth/components/LoginForm'

function LoginPage() {
  return <LoginForm />
}

export const LOGIN_ROUTE = '/'

export const loginRoute = createRoute({
  path: LOGIN_ROUTE,
  getParentRoute: () => publicLayoutRoute,
  component: LoginPage,
})
