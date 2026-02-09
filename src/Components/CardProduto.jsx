import React from 'react'
import "/src/CSS/CardProduto.css";
import { useState } from "react";
import { BsCameraVideo } from "react-icons/bs"; 


function CardProduto() {
  const [modalAberto, setModalAberto] = useState(false);
  return (
    <div>
      <div className="container-card">
        <div className="card-produt">
          <img
            src="https://m.media-amazon.com/images/I/51xUXDpOifL._AC_UF1000,1000_QL80_.jpg"
            alt=""
            className="card-image1"
          />
          <h3 className="card-title">
            Apple MacBook Air MacBook Air M4 Azul Meia-Noite 13" 2560 px x 1664
            px Apple M4 16GB de Ram
          </h3>
          <p>R$ 10.980,00</p>
          <div>
            <button>
              <span class="text">Comprar</span>
              <span class="blob"></span>
              <span class="blob"></span>
              <span class="blob"></span>
              <span class="blob"></span>
            </button>
          </div>
        </div>
        <div className="card-produt">
          <img
            src="https://images7.kabum.com.br/produtos/fotos/925357/iphone-17-pro-max-apple-256gb-48mp-tela-6-9-super-retina-xdr-azul-intenso_1757698084_gg.jpg"
            alt=""
            className="card-image2"
          />
          <h3 className="card-title">
            iPhone 17 Pro Max Apple 256GB, Câmera Tripla Fusion de 48MP, Tela
            6.9" Super Retina XDR, Azul-intenso
          </h3>
          <p>R$ 11.249,10</p>
          <div>
            <button>
              <span className="text">Comprar</span>
              <span className="blob"></span>
              <span className="blob"></span>
              <span className="blob"></span>
              <span className="blob"></span>
            </button>
          </div>
        </div>
        <div className="rf-product-card">
          <div className="rf-product-image-wrapper">
            <div className="card-produt">
              <h2>iMac</h2>
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-imac-202410?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=SXh2aE4zRm53L0l3NnhGK2wwZFpEeVFpZGxOY0d3emNHMmh4SnZVS1l0QTJzUm9kdjFCbFNETWhUL0NFUjdrYVJRTDhjbFg1ZXlSYWo3eW5aZUZxQjJvbklDSjVXM0pQY3RiODY0MDI2aUU"
                alt=""
                className="card-image1"
              />
            </div>

            <div className="rf-product-overlay">
              <button
                className="rf-product-link"
                onClick={() => setModalAberto(true)}
              >
                Veja em detalhes
              </button>
            </div>
          </div>
        </div>
        {modalAberto && (
          <div className="modal" onClick={() => setModalAberto(false)}>
            <div
              className="modal-conteudo"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="fechar" onClick={() => setModalAberto(false)}>
                ×
              </span>
              <div>
                <div className="modal-title"><h2>iMac</h2></div>
                
                <div className="container-mac">
                  <img
                    src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-imac-202410?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=SXh2aE4zRm53L0l3NnhGK2wwZFpEeVFpZGxOY0d3emNHMmh4SnZVS1l0QTJzUm9kdjFCbFNETWhUL0NFUjdrYVJRTDhjbFg1ZXlSYWo3eW5aZUZxQjJvbklDSjVXM0pQY3RiODY0MDI2aUU"
                    className="modal-img"
                  />

                  <div>
                    <ul className="modal-features">
                      <li className=''>💻 Chip M4 com CPU e GPU de até 10 núcleos</li>
                      <li>🎨 Tela Retina 4.5K com 500 nits</li>
                      <li>🎧 Áudio espacial com seis alto-falantes</li>
                      <li>
                        {" "}
                        <BsCameraVideo className="icon-camera" /> Câmera 12MP
                        com Center Stage
                      </li>
                    </ul>

                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="container-card">
        <div className="card-produt">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="card-image1"
          />
          <h3 className="card-title">AirPods Pro 3 - Apple (BR)</h3>
          <p>R$ 2.480,00</p>
          <div>
            <button>
              <span className="text">Comprar</span>
              <span className="blob"></span>
              <span className="blob"></span>
              <span className="blob"></span>
              <span className="blob"></span>
            </button>{" "}
          </div>
        </div>
        <div className="card-produt">
          <img
            src="https://m.media-amazon.com/images/I/51xUXDpOifL._AC_UF1000,1000_QL80_.jpg"
            alt=""
            className="card-image1"
          />
          <h3 className="card-title">
            Apple MacBook Air MacBook Air M4 Azul Meia-Noite 13" 2560 px x 1664
            px Apple M4 16GB de Ram
          </h3>
          <p>R$ 10.980,00</p>
          <div>
            <button>
              <span className="text">Comprar</span>
              <span className="blob"></span>
              <span className="blob"></span>
              <span className="blob"></span>
              <span className="blob"></span>
            </button>{" "}
          </div>
        </div>
        <div className="card-produt">
          <img
            src="https://m.media-amazon.com/images/I/51xUXDpOifL._AC_UF1000,1000_QL80_.jpg"
            alt=""
            className="card-image1"
          />
          <h3 className="card-title">
            Apple MacBook Air MacBook Air M4 Azul Meia-Noite 13" 2560 px x 1664
            px Apple M4 16GB de Ram
          </h3>
          <p>R$ 10.980,00</p>
          <div>
            <button>
              <span className="text">Comprar</span>
              <span className="blob"></span>
              <span className="blob"></span>
              <span className="blob"></span>
              <span className="blob"></span>
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduto
