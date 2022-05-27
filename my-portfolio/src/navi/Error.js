import React from 'react'
import { useParams } from 'react-router-dom'

const Error = () => {
    const params=useParams()
    return (
        <div className="content">
            <h1>"{params.pageName}" Page not Found</h1>
        </div>
    )
}

export default Error
