import React from 'react'
import { Outlet } from 'react-router-dom'
import BottomNav from "../../components/BottomNav"
const Layout = (props) => {
  return (
    <div>
        {props.children}
        <BottomNav></BottomNav>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout
