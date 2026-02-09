import React from 'react'
import Header from './Components/Header'
import PageInicio from './Components/PageInicio'
import PageProduto from './Components/PageProduto'
import PageSobre from './Components/PageSobre'
import PageContato from './Components/PageContato'
import Footer from './Components/Footer'
import "/src/CSS/global.css";


function App() {
  return (
    <div>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <PageInicio />
          <PageProduto />
          <PageSobre />
          <PageContato />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default App
