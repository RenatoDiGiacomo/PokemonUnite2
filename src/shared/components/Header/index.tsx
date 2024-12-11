import { Button } from '@istic-ui/react'
import { useAuth } from '@shared/authentication/context'
import { RiMenu2Fill } from 'react-icons/ri'

interface HeaderProps {
  toggle: () => void
}

function Header({ toggle }: Readonly<HeaderProps>) {
  const { signOut } = useAuth()

  return (
    <header className="bg-white px-12 py-6 h-24 flex justify-between items-center border-b">
      <div className="hidden md:block"></div>
      <button
        className="md:hidden text-2xl text-brand-600"
        type="button"
        onClick={toggle}
      >
        <RiMenu2Fill />
      </button>
      <span>
        Usuário
        <Button
          onClick={signOut}
          label="Sair"
          variant="outline"
          color="brand-500"
        />
      </span>
    </header>
  )
}

export default Header
