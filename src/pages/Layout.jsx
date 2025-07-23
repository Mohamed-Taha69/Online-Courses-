
import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Topheader from '../components/Topheader'

function RouteLayout() {
  return (
    <div>
      <Topheader />
         <Nav /> 
      <Outlet />
    <Footer />
    </div>
  )
}

export default RouteLayout
