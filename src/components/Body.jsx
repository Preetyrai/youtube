import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
    return <div className="grid grid-flow-col mx-8">
        <Sidebar/>
        <img src="https://instagram.fmaa2-2.fna.fbcdn.net/v/t51.2885-19/397169628_863948538740951_5129896183246623295_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fmaa2-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=vnsOu1YsSScAX-t17Zb&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfChE2tel5gUL88HnaqJB0RL9ZElJuMDmzLROc65GfKGdQ&oe=658CA766&_nc_sid=8b3546"
        alt="new" />
      <Outlet/>
    </div>
}

export default Body;