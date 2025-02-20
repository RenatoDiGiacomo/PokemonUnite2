import { Link } from '@tanstack/react-router'
import logo from '@assets/Banner1.svg'

const { VITE_APP_NAME, VITE_HOME_PAGE } = import.meta.env

function Logo() {
  return (
    <div className="h-24 bg-secondary-100 flex justify-center">
      <Link to={VITE_HOME_PAGE || '/users'}>
        <img src={logo} className="w-52" alt={VITE_APP_NAME} />
      </Link>
    </div>
  )
}

export default Logo
