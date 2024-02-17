import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/Button'
import { useState } from 'react'

const signUpForm = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
})

type SignUpForm = z.infer<typeof signUpForm>

function SignUp() {
  const [formData, setFormData] = useState<SignUpForm>({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationResult = signUpForm.safeParse(formData)
    if (validationResult.success) {
      const usersData = JSON.parse(localStorage.getItem('usersData') || '{}')

      const updatedUsersData = {
        ...usersData,
        [formData.email]: formData,
      }

      localStorage.setItem('usersData', JSON.stringify(updatedUsersData))

      console.log('Dados salvos com sucesso!')
    } else {
      console.error('Erro de validação:', validationResult.error)
    }
  }
  return (
    <>
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Kanbanana: A receita perfeita para uma rotina organizada!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative z-0 ">
                <input
                  id="name"
                  type="text"
                  className="peer block h-9 w-full appearance-none border-0 border-b-2 border-input bg-transparent px-0 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                />
                <label
                  htmlFor="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-light leading-none duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                >
                  Seu nome
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative z-0 ">
                <input
                  id="email"
                  type="email"
                  className="peer block h-9 w-full appearance-none border-0 border-b-2 border-input bg-transparent px-0 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                />
                <label
                  htmlFor="email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-light leading-none duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                >
                  Seu e-mail
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative z-0 ">
                <input
                  id="password"
                  type="password"
                  className="peer block h-9 w-full appearance-none border-0 border-b-2 border-input bg-transparent px-0 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                  value={formData.password}
                  onChange={handleChange}
                />
                <label
                  htmlFor="password"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-light leading-none duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                >
                  Sua senha
                </label>
              </div>
            </div>

            <Button className="w-full " type="submit">
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a
                href=""
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                termos de serviço
              </a>{' '}
              e{' '}
              <a
                href=""
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                políticas de privacidade.
              </a>
            </p>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                OU
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-center text-sm font-light text-foreground">
              Já tem uma conta?{' '}
              <Link
                to="/sign-in"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Clique aqui{' '}
              </Link>{' '}
              para entrar
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
