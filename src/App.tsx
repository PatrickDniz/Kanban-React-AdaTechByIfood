import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ThemeProvider } from './components/theme/ThemeProvider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="Kanbanana-theme">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export { App }
