import React from "react";
import SideBar from "../components/sidebar";
import Navbar from "../components/navbar";

export default function Layout({ children }: { children: React.ReactNode}){
    return(
        <div>
            <Navbar/>
            <div>
                <SideBar/>
            </div>
            <div>{children}</div>
        </div>
    )
}
