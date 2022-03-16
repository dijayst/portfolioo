import React,{useEffect} from 'react'

const Redirect = (props) => {
const git={...props}
    useEffect(() => {
        window.location = git.route.loc;
    })

    return (
        <div>
            
        </div>
    )
}

export default Redirect
