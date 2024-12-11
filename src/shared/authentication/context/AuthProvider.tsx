import React, { createContext, useState } from 'react'
import { router } from 'src/routes/__root'

import authService from '../services/auth.service'
import { AuthUser } from '../types'

import { AuthContextType } from './types'

const { VITE_HOME_PAGE } = import.meta.env

export const authContextInitialState: AuthContextType = {
  authenticated: false,
  loading: false,
  error: null,
  user: null,
}

export const AuthContext = createContext<AuthContextType>(
  authContextInitialState,
)

export function AuthProvider({
  children,
}: {
  readonly children: React.ReactNode
}) {
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<AuthUser | null>(null)

  const signIn = async (email: string, password: string) => {
    await handle(async () => {
      await authService.login(email, password)
      setAuthenticated(true)
      router.navigate({ to: VITE_HOME_PAGE })
    })
  }

  const signOut = async () => {
    await handle(async () => {
      await authService.logout()
      router.navigate({ to: '/' })
    })
  }

  const recovery = async (email: string) => {
    await handle(() => authService.recovery(email))
  }

  const handle = async (fn: () => Promise<void>) => {
    setLoading(true)

    try {
      await fn()
    } catch (error) {
      const { message } = error as Error
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  const value = React.useMemo(
    () => ({
      ...authContextInitialState,
      authenticated,
      error,
      loading,
      user,
      signIn,
      signOut,
      recovery,
    }),
    [authenticated, error, loading, user],
  )

  React.useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await authService.isAuthenticated()
      const user = await authService.getUser()

      setAuthenticated(isAuthenticated)
      setUser(user)
    }

    checkAuth()

    return () => {
      setAuthenticated(false)
      setUser(null)
    }
  }, [])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = React.useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
