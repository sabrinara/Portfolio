import { useEffect } from "react";
import { useState } from "react";
import { GridLoader } from "react-spinners";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Intro from "./Intro";
import Footer from "./Footer";
import Experience from "./Experience";
import Skills from "./Skills";
import Project from "./Project";
import Project2 from "./Project2";
import Project1 from "./Project1";
import Education from "./Education";
import Contact from "./Contact";


const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="h-screen w-screen flex items-center justify-center">
                <GridLoader color="#469bea" size={30} />
            </div>
        );
    }
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Intro></Intro>
            <Skills></Skills> 
            <Experience></Experience>
            <Project1></Project1>
            <Project2></Project2>
            <Project></Project>
            <Education></Education>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;