import { createRoute, Link } from '@tanstack/react-router'
import { publicLayoutRoute } from '@shared/layouts/PublicLayout'

function LoginPage() {
  return (
    <div className="p-2">
      <h3>Login</h3>
      <Link to="/users">Entrar no sistema</Link>
    </div>
  )
}

export const LOGIN_ROUTE = '/'

export const loginRoute = createRoute({
  path: LOGIN_ROUTE,
  getParentRoute: () => publicLayoutRoute,
  component: LoginPage,
})
