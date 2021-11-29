import HomeLayoutHoc from "./hoc/home.hoc";

import React from "react";
import HomeLayout from "./layout/home.layout";
import { Route, Routes } from "react-router";
 import Masterx from "./components/master";

function App()
{ const Master =HomeLayoutHoc(Masterx);
 
 return(
     <Routes>
     <Route  path="/" exact element={<HomeLayout ></HomeLayout>}/>
    <Route path="/:type" exact  element={<Master></Master>} />
</Routes>
 )
}
export default App;