import { RouterProvider } from '@tanstack/react-router'
import { AuthProvider } from '@shared/authentication/context'

import { router } from './routes/__root'

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
