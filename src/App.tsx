import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ThemeProvider } from './components/theme/ThemeProvider'

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="Kanbanana-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
