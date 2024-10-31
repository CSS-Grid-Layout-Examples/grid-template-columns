/* node modules */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* app imports */
import AppOutlet from '@components/index.tsx'
import "@common/css/common.scss";

/* render */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppOutlet />
  </StrictMode>,
)
