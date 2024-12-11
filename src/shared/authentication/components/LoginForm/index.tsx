import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { TextInput, PasswordInput, Button } from '@istic-ui/react'
import { Link } from '@tanstack/react-router'
import {
  FORGET_PAGE_ROUTE,
  PRIVACY_PAGE_ROUTE,
} from '@shared/authentication/pages'
import { useAuth } from '@shared/authentication/context'

const LoginFormSchema = z.object({
  email: z.string().min(1, 'Campo Obrigatório').email('E-mail inválido'),
  password: z.string().min(4, 'A senha deve ter no mínimo 4 caracteres'),
})

type LoginFormType = z.infer<typeof LoginFormSchema>

function LoginForm() {
  const { signIn, loading, error } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
  })

  const onSubmit = async (data: LoginFormType) => {
    const { email, password } = data

    signIn && (await signIn(email, password))
  }

  return (
    <div className="w-full md:w-[608px] rounded-md bg-white p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl text-brand-500">Login</h2>
          <p className="text-md text-muted">
            Faça o login para acessar a plataforma
          </p>
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            error={{ description: errors.email?.message }}
            {...register('email')}
          />

          <PasswordInput
            label="Senha"
            placeholder="Digite sua senha"
            error={{ description: errors.password?.message }}
            {...register('password')}
          />

          <Button label="Login" isLoading={loading} />

          {error && <p className="text-red-500">{error}</p>}

          <Link to={FORGET_PAGE_ROUTE} className="text-brand-500 font-bold">
            Esqueci minha senha
          </Link>

          <p className="text-muted">
            Ao acessar e utilizar a plataforma, você concorda com com nossa{' '}
            <Link to={PRIVACY_PAGE_ROUTE} className="text-brand-500 font-bold">
              política de privacidade
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
