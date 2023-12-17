import { useNavigate } from "react-router-dom";
import { THEORY, FORECAST } from "../store/routes";
import { AnimatePresence, motion } from "framer-motion";
import { VerticalBlob } from "../components/motion/VerticalBlob";
import { AnimatedText } from "../components/motion/AnimatedText";
export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <AnimatePresence>
            <VerticalBlob />
            <main className="home-page bg-white flex justify-center items-center min-h-screen">
                <div className="text-center items-center">
                    <h1 className="header-title text-5xl">ECONOMIC FORECASTING</h1>
                    <h2 className="subtitle font-light text-3xl">Lagrange Method-Based Approximation</h2>
                    <div className="button-container flex justify-center items-center">
                        <button className="navigation-btn mx-4" onClick={() => navigate(THEORY)}>Theory</button>
                        <button className="navigation-btn mx-4" onClick={() => navigate(FORECAST)}>Forecast</button>
                    </div>
                    <footer className="text-gray-500 text-sm mt-4 py relative bottom-0">
                        <div>
                            CAL Economies Inc. © 2021
                        </div>
                        <div>
                            Series of 2023
                        </div>
                        
                    </footer>
                </div>
            </main>
        </AnimatePresence>
    );
};