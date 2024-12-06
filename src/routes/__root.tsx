import { createRouter } from '@tanstack/react-router'
import { rootRoute } from '@settings/tanstack-router'
import { privateLayoutRoute, publicLayoutRoute } from '@shared/layouts'
import { forgetRoute, loginRoute } from '@features/auth/pages'
import { createUserRoute, listUsersRoute } from '@features/users/pages'

const routeTree = rootRoute.addChildren([
  publicLayoutRoute.addChildren([loginRoute, forgetRoute]),
  privateLayoutRoute.addChildren([listUsersRoute, createUserRoute]),
])

export const router = createRouter({ routeTree })
