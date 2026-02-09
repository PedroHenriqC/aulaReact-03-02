import React from 'react'
import { GrEmoji } from "react-icons/gr";

function PageContato() {
  return (
    <form class="contact-form">
      <h2> <GrEmoji />Envie uma mensagem</h2>

      <div class="row">
        <input type="text" placeholder="Escreva seu nome aqui" />
        <input type="email" placeholder="Escreva seu e-mail aqui" />
      </div>

      <textarea placeholder="Escreva sua mensagem aqui"></textarea>

      <button className='button-contato'>Enviar</button>
    </form>
  );
}

export default PageContato
