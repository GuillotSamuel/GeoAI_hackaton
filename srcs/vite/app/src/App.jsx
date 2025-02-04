import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <navbar></navbar>

      <footer>
        <div class="container">

{/* Our model performance */}

{/* Model solution */}

{/* Our technical solution */}

{/* streamlit */}

{/* our team */}

          <div class="footer-left">
            <p>Mentions légales</p>
          </div>

          <div class="footer-center">
            <p>Développé par notre super équipe</p>
          </div>

          <div class="footer-right">
            <a href="https://github.com/membre1" target="_blank">Membre 1</a>
            <a href="https://github.com/membre2" target="_blank">Membre 2</a>
            <a href="https://github.com/membre3" target="_blank">Membre 3</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
