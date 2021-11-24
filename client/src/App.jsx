import HomeLayoutHoc from "./hoc/home.hoc";
import Temp from "./components/temp";
import React from "react";
import { Route, Routes } from "react-router";

function App()
{const Home =HomeLayoutHoc(Temp);
 return(
     <Routes>
     <Route
     path="/"
   element={<Home ></Home>}
/>
</Routes>
 )
}
export default App;