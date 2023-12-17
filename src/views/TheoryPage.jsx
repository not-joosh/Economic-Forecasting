import { AnimatePresence, motion } from "framer-motion";
import { HorizontalBlob } from "../components/motion/HorizontalBlob";
import { TheoryContent } from '../assets/_assets'; 
import { HOME, FORECAST } from "../store/routes";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const TheoryPage = () => {   
    const navigate = useNavigate();


    return (
        <AnimatePresence>
            <HorizontalBlob />
            <main className="theory-page bg-white flex justify-center items-end min-h-screen">
                <img src={TheoryContent} alt="Theory Content" className="w-full h-full absolute z-1" style={{ userSelect: 'none' }} />
                <div className="button-container flex justify-center items-center z-10">
                    <button className="navigation-btn mx-4 mb-4" onClick={() => navigate(HOME)}>Home</button>
                    <button className="navigation-btn mx-4 mb-4" onClick={() => navigate(FORECAST)}>Forecast</button>
                </div>
            </main>
        </AnimatePresence>
    );
};