import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Main/Home"
import LifeServices from "../pages/Main/LifeServices"
import Shop from "../pages/Main/Shop"
import User from "../pages/Main/User"
import BottomNav from "../components/BottomNav"
import City from '../pages/City';
import Layout from '../pages/Main/Layout'

const AppRouter = () => {
  return (
    <div>
        <Router>
        {/* <BottomNav></BottomNav> */}
            <Routes>
                <Route  path={"/"} element={<Layout />}>
                    <Route index  element={<Home />}></Route>
                    {/* <Route path={"/"}  element={<Home />}></Route> */}
                    <Route  path={"/life"} element={<LifeServices></LifeServices>}></Route>
                    <Route  path={"/shop"} element={<Shop></Shop>}></Route>
                    <Route  path={"/user"} element={<User></User>}></Route>
                </Route>
            </Routes>
            <Routes>
              <Route  path={"/city"} element={<City></City>}></Route>
            </Routes>
      </Router>      
    </div>
  )
}

export default AppRouter
