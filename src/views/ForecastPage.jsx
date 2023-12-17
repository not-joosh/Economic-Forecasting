import { useNavigate } from 'react-router-dom';
import { Table } from '../components/Table';
import { HOME, THEORY } from '../store/routes';
import { VerticalBlob } from '../components/motion/VerticalBlob';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const ForecastPage = () => {
    const [country, setCountry] = useState('');
    const [year, setYear] = useState('');
    const navigate = useNavigate();
    const countries = ['United States', 'Italy', 'Philippines']; // Replace with your array of country names

    useEffect(() => {

    }, [])

    return (
        <AnimatePresence>
            <VerticalBlob />
            <main className="p-7 bg-white shadow-lg">
                <h1 className="text-2xl font-semibold text-center mb-4">ECONOMIC FORECASTING</h1>
                {/* <p className="text-center mb-6">Lagrange Method-Based Approximation</p> */}
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <div className="flex-row flex">
                            <label className="block mb-2 font-manrope" htmlFor="country">
                                Select Country:
                            </label>
                            <select
                                className="mb-4 flex-grow"
                                id="country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            >
                                <option value="">Select a country</option>
                                {countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <h2 className="font-semibold mb-2">input Data:</h2>
                        <div className="grid gap-4 mb-4">
                            <Table />
                        </div>
                        <div className="flex justify-between mb-4">
                            <label className="block mb-2" htmlFor="year">
                                Enter Year to Approximate:
                            </label>
                            <input className="flex-grow" id="year" placeholder="" />
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-2">Approximation Degree:</h2>
                        <div className="flex justify-between mb-4">
                            <button className="w-1/5" variant="outline">
                                Linear
                            </button>
                            <button className="w-1/5" variant="outline">
                                Quadratic
                            </button>
                            <button className="w-1/5" variant="outline">
                                Cubic
                            </button>
                            <button className="w-1/5" variant="outline">
                                Quartic
                            </button>
                            <button className="w-1/5" variant="outline">
                                Quintic
                            </button>
                        </div>
                        <h2 className="font-semibold mb-2">Intermediary Results:</h2>
                        <h2 className="font-semibold mb-2">Lagrange Result:</h2>
                        <input className="mb-4" placeholder="" />
                        <h2 className="font-semibold mb-2">Economic Forecast Statement:</h2>
                        <input className="h-24 mb-4" placeholder="" />
                    </div>
                </div>
                <div className="button-container flex justify-center items-center">
                    <button className="navigation-btn mx-4 mb-4" onClick={() => navigate(HOME)}>
                        Home
                    </button>
                    <button className="navigation-btn mx-4 mb-4" onClick={() => navigate(THEORY)}>
                        Theory
                    </button>
                </div>
            </main>
        </AnimatePresence>
    );
};
