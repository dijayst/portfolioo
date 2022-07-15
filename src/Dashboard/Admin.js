import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Addedservice from './Addedservice'
import Contactme from './Contactme'
import Customersreview from './Customersreview'
import Homee from './Homee'
import Myserviced from './Myserviced'
import Mystack from './Mystack'
import Projectdone from './Projectdone'
import Sidenav from './Sidenav'


const Admin = () => {
    return (
        <div>
            <Sidenav/>
            
            <Routes>
            <Route path='/stack' element={<Mystack/>}/>
            <Route path='/dashboard' element={<Homee/> }/>

                   <Route path='/myserviced' element={<Myserviced/>}/>
                    <Route path='/addedservice' element={<Addedservice/>}/>
                    <Route path='/contactme' element={<Contactme/>}/>
                    <Route path='/customersreview' element={<Customersreview/>}/> 
                    <Route path="/sidenav" element={<Sidenav/>}/>
                    <Route path="/project" element={<Projectdone/>}/>

            </Routes>
        </div>
    )
}

export default Admin
