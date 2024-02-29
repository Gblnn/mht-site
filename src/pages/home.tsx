import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../components/header";
import HomePage from "./home-page";
import ServicesPage from "./services-page";
import AboutPage from "./about-page";


export default function Home() {
    const usenavigate = useNavigate()
    useEffect(()=>{
        usenavigate("/home")
    },[])
    return(
        <>
        <Header/>
        <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/services" element={<ServicesPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
        </Routes>
        </>
    )
}