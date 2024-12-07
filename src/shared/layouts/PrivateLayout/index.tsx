import { useState } from 'react'
import { rootRoute } from '@settings/tanstack-router'
import { createRoute, Outlet } from '@tanstack/react-router'
import Menu from '@shared/components/Menu'
import Header from '@shared/components/Header'

function PrivateLayout() {
  const [opened, setOpened] = useState(false)

  return (
    <div className="h-full flex">
      <Menu opened={opened} toggle={() => setOpened(!opened)} />
      <div className="flex-1">
        <Header toggle={() => setOpened(!opened)} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export const PrivateRoutes = createRoute({
  id: '_private-layout',
  getParentRoute: () => rootRoute,
  component: PrivateLayout,
})
