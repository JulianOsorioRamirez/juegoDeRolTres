import React from 'react'
import runningLog from '../assets/img/runningLog.png'
import FormLog from '../components/formLog'

const Login = () => {
    return (
        <div className='formulario'>
        <FormLog />
        <div className='FaldonLog'>
            <h1 className='textLog'>Redibuja tus limites...</h1>
        </div>
        <div className='imgHome'>
            <img src={runningLog} alt='bici' width='100%'/>
            
        </div>
        
        </div>
        

    )
    }
export default Login;