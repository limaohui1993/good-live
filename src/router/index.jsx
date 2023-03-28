import React from 'react'
import { HashRouter as Router, Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import LifeServices from "../pages/LifeServices"
import Shop from "../pages/Shop"
import User from "../pages/User"
import BottomNav from "../components/BottomNav"

const AppRouter = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path={"/"} element={<Home />}></Route>
                <Route  path={"/life"} element={<LifeServices></LifeServices>}></Route>
                <Route  path={"/shop"} element={<Shop></Shop>}></Route>
                <Route  path={"/user"} element={<User></User>}></Route>
            </Routes>
            <BottomNav></BottomNav>
      </Router>      
    </div>
  )
}

export default AppRouter
