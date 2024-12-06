import { createRoute, Link, Outlet } from '@tanstack/react-router'
import { rootRoute } from '@settings/tanstack-router'
import { FORGET_ROUTE, LOGIN_ROUTE } from '@features/auth/pages'

function PublicLayout() {
  return (
    <div>
      <h1>Area Pública</h1>
      <div className="flex gap-2">
        <Link to={LOGIN_ROUTE}>Login</Link>
        <Link to={FORGET_ROUTE}>Esqueci minha senha</Link>
      </div>
      <Outlet />
    </div>
  )
}

export const publicLayoutRoute = createRoute({
  id: '_public-layout',
  getParentRoute: () => rootRoute,
  component: PublicLayout,
})
