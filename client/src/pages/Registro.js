import React from 'react'
import Nadar from '../assets/img/Nadar.png'
import FormReg from '../components/formReg'

const Registro = () => {
    return (
        <div className='formulario'>
        <FormReg />
        <div className='imgHome'>
            <img src={Nadar} alt='bici' width='100%'/>
            
        </div>
        </div>
        

    )
    }
export default Registro;