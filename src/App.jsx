import React from 'react'
import Header from './Components/Header'
import PageInicio from './Components/PageInicio'
import PageProduto from './Components/PageProduto'
import PageSobre from './Components/PageSobre'


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
        </main>
      </div>
    </div>
  )
}

export default App
