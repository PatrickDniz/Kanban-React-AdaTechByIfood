import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/board" className="text-primary">
          Board
        </Link>
      </p>
    </div>
  )
}

export default NotFound
