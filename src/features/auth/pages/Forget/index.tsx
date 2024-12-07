import { createRoute } from '@tanstack/react-router'
import { PublicRoutes } from '@shared/layouts/PublicLayout'

function ForgetPage() {
  return (
    <div className="p-2">
      <h3>Esqueci minha senha</h3>
    </div>
  )
}

export const FORGET_PAGE_ROUTE = '/forget'

export const ForgetRoute = createRoute({
  path: FORGET_PAGE_ROUTE,
  getParentRoute: () => PublicRoutes,
  component: ForgetPage,
})
