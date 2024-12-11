import { RouterProvider } from '@tanstack/react-router'
import { AuthProvider } from '@shared/authentication/context'
import { router } from '@settings/tanstack-router'

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
