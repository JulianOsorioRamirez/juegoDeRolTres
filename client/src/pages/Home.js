import React from 'react'
import Bici from '../assets/img/bici.png'
import Carousel from '../components/carrusel'

const Homne = () => {
    return (
        <div className='carrusel'>
        <Carousel />
        <div className='Faldon'>
        <h1>SPA</h1>
        <h2>La mejor pagina para encontrar todas las pruebas de Atletismo</h2>
        <p>Actualmente solo disponemos de pruebas organizadas en Andalucía</p>
        </div>
        <div className='imgHome'>
            <img src={Bici} alt='bici' width='100%'/>
            
        </div>
        </div>
        

    )
    }
export default Homne;
