import HomeLayoutHoc from "./hoc/home.hoc";

import React from "react";
import HomeLayout from "./layout/home.layout";
import { Route, Routes } from "react-router";

function App()
{
 return(
     <Routes>
     <Route
     path="/"
   element={<HomeLayout ></HomeLayout>}
/>
</Routes>
 )
}
export default App;