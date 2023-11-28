import React, { useState, useEffect } from 'react';
import DynamicChart from '../dashboardComponents/charts/DynamicChart';


const SalesReport = ({ period, salesData }) => {
    const [filteredSales, setFilteredSales] = useState([]);

    useEffect(() => {
        // Function to filter sales data based on the specified period
        const filterSales = () => {
            let filteredData = [];

            if (period === 'weekly') {
                // Filter data for this week
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                const currentWeek = getWeekNumber(currentDate);

                filteredData = salesData.filter((sale) => {
                    const saleDate = new Date(sale.createdAt);
                    const saleYear = saleDate.getFullYear();
                    const saleWeek = getWeekNumber(saleDate);
                    return saleYear === currentYear && saleWeek === currentWeek;
                });
            } else if (period === 'monthly') {
                // Filter data for last month
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                const currentMonth = currentDate.getMonth();

                filteredData = salesData.filter((sale) => {
                    const saleDate = new Date(sale.createdAt);
                    const saleYear = saleDate.getFullYear();
                    const saleMonth = saleDate.getMonth();
                    return saleYear === currentYear && saleMonth === currentMonth;
                });
            } else if (period === 'annual') {
                // Filter data for last year
                const currentDate = new Date();
                const lastYear = currentDate.getFullYear() - 1;

                filteredData = salesData.filter((sale) => {
                    const saleDate = new Date(sale.createdAt);
                    const saleYear = saleDate.getFullYear();
                    return saleYear === lastYear;
                });
            }

            setFilteredSales(filteredData);
        };

        filterSales();
    }, [period, salesData]);

    // Function to get the week number of a date
    const getWeekNumber = (date) => {
        const oneJan = new Date(date.getFullYear(), 0, 1);
        const days = Math.floor((date - oneJan) / 86400000);
        return Math.ceil((date.getDay() + 1 + days) / 7);
    };

    // Function to generate chart data based on filtered sales data
    const generateChartData = () => {
        // Extracting dates and sales amounts from filteredSales
        const chartLabels = filteredSales.map((sale) => {
            // Parsing the date to a more readable format
            const date = new Date(sale.createdAt);
            return date.toLocaleDateString(); // Change this to suit your date format preference
        });

        const chartData = filteredSales.map((sale) => sale.amount);

        // Creating an object with appropriate labels and datasets for Chart.js
        const chartConfig = {
            labels: chartLabels,
            datasets: [
                {
                    label: 'Sales',
                    data: chartData,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1,
                },
            ],
        };

        return chartConfig;
    };


    const chartData = generateChartData();

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Sales Report</h2>
            <div className="mb-4">
                <p className="mb-2">Total Revenue: ${filteredSales.reduce((acc, sale) => acc + sale.amount, 0)}</p>
                <p>Total Number of Products Sold: {filteredSales.reduce((acc, sale) => acc + sale.quantitySold, 0)}</p>
            </div>
            <div className="mb-8">
                <DynamicChart
                    chartType="line"
                    datasets={chartData.datasets}
                    labels={chartData.labels}
                />
            </div>
            <div>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Product Name</th>
                            <th className="border border-gray-300 px-4 py-2">Quantity Sold</th>
                            <th className="border border-gray-300 px-4 py-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSales.map((sale, index) => (
                            <tr key={index} className={(index % 2 === 0) ? 'bg-gray-100' : ''}>
                                <td className="border border-gray-300 px-4 py-2">{sale.productName}</td>
                                <td className="border border-gray-300 px-4 py-2">{sale.quantitySold}</td>
                                <td className="border border-gray-300 px-4 py-2">${sale.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesReport;
