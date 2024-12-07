import { createRouter } from '@tanstack/react-router'
import { rootRoute } from '@settings/tanstack-router'
import { PrivateRoutes, PublicRoutes } from '@shared/layouts'
import { ForgetRoute, LoginRoute } from '@features/auth/pages'
import { createUserRoute, listUsersRoute } from '@features/users/pages'

const routeTree = rootRoute.addChildren([
  PublicRoutes.addChildren([LoginRoute, ForgetRoute]),
  PrivateRoutes.addChildren([listUsersRoute, createUserRoute]),
])

export const router = createRouter({ routeTree })
