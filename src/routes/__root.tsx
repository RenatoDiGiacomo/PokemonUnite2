import { createRouter } from '@tanstack/react-router'
import { rootRoute } from '@settings/tanstack-router'
import { publicLayoutRoute } from '@shared/layouts/PublicLayout'
import { privateLayoutRoute } from '@shared/layouts/PrivateLayout'
import { loginRoute } from '@features/auth/pages/Login'
import { forgetRoute } from '@features/auth/pages/Forget'
import { listUsersRoute } from '@features/users/pages/ListUsers'
import { createUserRoute } from '@features/users/pages/CreateUser'

const routeTree = rootRoute.addChildren([
  publicLayoutRoute.addChildren([loginRoute, forgetRoute]),
  privateLayoutRoute.addChildren([listUsersRoute, createUserRoute]),
])

export const router = createRouter({ routeTree })
