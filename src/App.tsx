import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.scss'

import { ButtonLink } from './components/buttons/buttons'


function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        Div1
      </div>
      <div className="moreCard">
        <p>Div2</p>
        <ButtonLink text='Registration' href='/registration' />
      </div>
    </>
  )
}

export default App
