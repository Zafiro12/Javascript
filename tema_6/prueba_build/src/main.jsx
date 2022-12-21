import React from 'react'
import ReactDOM from 'react-dom/client'
import Tarjeta from './Tarjeta'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tarjeta titulo={"Hola mundo!"} src={"src/assets/imagen1.jpg"} parrafo={"Este es un componente para tarjetas con imágenes"} />
  </React.StrictMode>,
)
