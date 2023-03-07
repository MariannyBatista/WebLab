import React from 'react'
import Productos from '../../componentes/productos'

export default function Home(props) {

    return (
        <div className='productsDiv'>
            <Productos props={props} />
        </div>
    )
}


