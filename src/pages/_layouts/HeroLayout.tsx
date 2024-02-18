import { Link } from 'react-router-dom'
import TypewriterEffect from '../../components/ui/TypewriterEffect'
import { LuBanana } from 'react-icons/lu'
import { Button } from '@/components/ui/Button'

function HeroLayout() {
  const words = [
    {
      text: 'Seu',
      className: 'text-hero',
    },
    {
      text: 'parceiro',
      className: 'text-hero',
    },
    {
      text: 'de',
      className: 'text-hero',
    },
    {
      text: 'produtividade',
      className: 'text-hero',
    },
    {
      text: 'diária:',
      className: 'text-hero',
    },
    {
      text: 'Kanbanana.',
      className: 'text-primary',
    },
  ]
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className='absolute inset-0 bg-gray-700 bg-[url("./assets/kanbanHero1.jpeg")] bg-cover bg-no-repeat bg-blend-multiply'></div>
        <header className="relative z-10 flex items-center justify-between gap-3 p-10 text-lg text-hero">
          <div className="flex items-center gap-3">
            <LuBanana className="h-5 w-5" />
            <h1 className="font-semibold">Kanbanana</h1>
          </div>
        </header>
        <div className="relative z-10 flex h-[40rem] flex-1 flex-col items-center justify-center ">
          <p className="mb-10 text-sm text-hero sm:text-base">
            O caminho para uma rotina organizada começa aqui
          </p>
          <TypewriterEffect words={words} />
          <div className="mt-10 flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Button>
              <Link to="/sign-in">Acessar conta </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroLayout
