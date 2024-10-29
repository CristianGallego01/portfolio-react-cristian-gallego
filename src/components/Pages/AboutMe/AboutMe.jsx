import React from 'react'
import './AboutMe.css'
import {Photo} from "../../Iu/Photo.jsx"

export const AboutMe = () => {
  return (
    <>
    <div className='general-information'>
      <section className='me'>
      <Photo/>
      </section>
      <section className='my-imformation'>
        <p>
        Soy un joven que posee conocimientos en diversas áreas, tales como la contaduría y el servicio técnico,
        entre otros. Actualmente, estoy cursando estudios en el Servicio Nacional de Aprendizaje (SENA), donde
        me estoy formando para obtener el tecnólogo en Análisis y Desarrollo de Software (ADSO). Este programa 
        lo estoy realizando en modalidad nocturna, trabajo como auxiliar contable en un puesto que no es de
        tiempo completo para haci poder tener tiempo para realizar activades de la formacion.
        </p>
      </section>
    </div>
    </>
  )
}
