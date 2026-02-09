import React from 'react'
import Carrosel from './Carrosel.jsx'
import CardProduto from './CardProduto.jsx'
import '/src/CSS/PageInicio.css'

function PageInicio() {
  return (
    <div className='page-container'>
      <Carrosel />
      <CardProduto />
    </div>
  )
}

export default PageInicio
