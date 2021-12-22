import React from "react";
import {MapContainer,TileLayer,Marker,Popup} from "react-leaflet";
import { MdContentCopy } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
//[51.505,-0.09]
const Mapview=(props)=>{
    return(
        <>
        <div>
      
               <div>
                <h4 className="text-lg font-medium"> call</h4>
                <h5 className="text-Zomato-400 font-medium">{props.phno}</h5>
                </div>
                <div>
                    <h4 className="text-xl font-medium">Direction</h4>
          <div className="w-full h-40">    
           
  <MapContainer center={props.mapLocation} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={props.mapLocation}>
      <Popup>
        {props.title}
      </Popup>
    </Marker>
  </MapContainer>
</div>
<div>
    <p>
   {props.address}
   
    </p>
    <div className="flex items-center gap-2">
    <button className="mt-2 flex items-center gap-2 px-3 py-1 border text-Zomato-400 border-gray-700 rounded-lg">
    <MdContentCopy />  copy
    </button>
    <button className="mt-2 flex items-center gap-2 px-3 py-1 border text-Zomato-400 border-gray-700 rounded-lg">
    <FaDirections/>  Directions
    </button>
    </div>
</div>
 </div>

            </div></>
    )
}
export default Mapview;