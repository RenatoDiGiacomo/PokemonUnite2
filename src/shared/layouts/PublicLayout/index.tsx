import { useEffect } from 'react'
import { createRoute, Outlet, useNavigate } from '@tanstack/react-router'
import { rootRoute } from '@settings/tanstack-router'
// import { LOGIN_PAGE_ROUTE } from '@shared/authentication/pages'
import { useAuth } from '@shared/authentication/context'
import video from '@assets/pokemonMovie_1.mp4'

const { VITE_HOME_PAGE } = import.meta.env

function PublicLayout() {
  const { authenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (authenticated) {
      navigate({ to: VITE_HOME_PAGE })
    }
  }, [authenticated])

  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center items-center row-span-1">
        <video
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.5)',
          }}
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="flex justify-center items-start md:items-center row-span-3 md:row-span-1 p-8">
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
