import { createRoute } from '@tanstack/react-router'
import { publicLayoutRoute } from '@shared/layouts/PublicLayout'

function ForgetPage() {
  return (
    <div className="p-2">
      <h3>Esqueci minha senha</h3>
    </div>
  )
}

export const FORGET_ROUTE = '/forget'

export const forgetRoute = createRoute({
  path: FORGET_ROUTE,
  getParentRoute: () => publicLayoutRoute,
  component: ForgetPage,
})
