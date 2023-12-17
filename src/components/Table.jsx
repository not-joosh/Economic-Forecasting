import React, { useState, useEffect } from 'react';

export const Table = () => {
  const [gdpData, setGdpData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/scrape');
        const data = await response.json();
        setGdpData(data);
      } catch (error) {
        console.error('Error fetching GDP data:', error);
      }
    };
    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="bg-brown text-stone-600 p-4">
      <div >
        <div className="overflow-x-auto" style={{ height: '300px' }}>
          <table className="table-fixed w-full">
            <thead>
              <tr>
                <th>Year</th>
                <th>GDP PER CAPITA</th>
              </tr>
            </thead>
            <tbody style = {{overflowY: 'scroll'}}>
            {gdpData.length === 0 ? (
                <tr>
                  <td colSpan="2" className="text-center">Loading...</td>
                </tr>
              ) : (
                gdpData.map(([year, gdp]) => (
                  <tr key={year}>
                    <td className="border border-neutral-800 px-4 py-2 text-center">{year}</td>
                    <td className="border border-neutral-800 px-4 py-2 text-center">${gdp.toLocaleString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Table;
