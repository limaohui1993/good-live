import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import LifeServices from "../pages/LifeServices"
import Shop from "../pages/Shop"
import User from "../pages/User"
import BottomNav from "../components/BottomNav"

const AppRouter = () => {
  return (
    <div>
        <Router>
          <BottomNav></BottomNav>
            <Routes>
                <Route  path={"/"} element={<Home />}></Route>
                <Route  path={"/life"} element={<LifeServices></LifeServices>}></Route>
                <Route  path={"/shop"} element={<Shop></Shop>}></Route>
                <Route  path={"/user"} element={<User></User>}></Route>
            </Routes>
      </Router>      
    </div>
  )
}

export default AppRouter
