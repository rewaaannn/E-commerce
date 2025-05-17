import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
    return (
        <div>
        
            <h2 className='text-center '>You are Done!</h2>
        
            <Link to='/' className='btn btn-danger'>back to login</Link>
        
        </div>
    )
}

export default Success
    