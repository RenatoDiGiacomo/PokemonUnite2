import { createRouter } from '@tanstack/react-router'
import { rootRoute } from '@settings/tanstack-router'
import { PrivateRoutes, PublicRoutes } from '@shared/layouts'
import { forgetRoute, loginRoute } from '@features/auth/pages'
import { createUserRoute, listUsersRoute } from '@features/users/pages'

const routeTree = rootRoute.addChildren([
  PublicRoutes.addChildren([loginRoute, forgetRoute]),
  PrivateRoutes.addChildren([listUsersRoute, createUserRoute]),
])

export const router = createRouter({ routeTree })
