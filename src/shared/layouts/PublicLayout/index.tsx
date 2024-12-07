import { createRoute, Link, Outlet } from '@tanstack/react-router'
import { rootRoute } from '@settings/tanstack-router'
import logo from '@assets/login-logo.png'
import { LOGIN_ROUTE } from '@features/auth/pages'

const { VITE_APP_NAME } = import.meta.env

function PublicLayout() {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2">
      <div className="bg-brand-50 flex justify-center items-center row-span-1">
        <Link to={LOGIN_ROUTE}>
          <img
            src={logo}
            alt={VITE_APP_NAME}
            className="w-[250px] h-[75px] md:w-[497px] md:h-[149px]"
          />
        </Link>
      </div>
      <div className="bg-brand-500 flex justify-center items-start md:items-center row-span-3 md:row-span-1 p-8">
        <Outlet />
      </div>
    </div>
  )
}

export const PublicRoutes = createRoute({
  id: '_public-layout',
  getParentRoute: () => rootRoute,
  component: PublicLayout,
})
