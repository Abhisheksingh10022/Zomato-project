import React from "react";
import { useParams} from "react-router-dom";
import Delivery from "../components/Delivery";
import Dining from "../components/Dining Out";
const Home=()=>{
    const {type}=useParams();

    return (
    <>
    <div className="my-5">
{type==="delivery"&&<Delivery />}
{type==="dining"&&<Dining />}
  </div>  </>
    )

}
export default Home;