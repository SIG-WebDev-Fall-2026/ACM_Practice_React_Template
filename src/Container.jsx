import React from 'react'
import './Container.css'

function Container({children}) {
    return (
        <div class="Container">
            {children}
        </div>
    )

}

export default Container