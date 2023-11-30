import React, { forwardRef, useState } from 'react';
import DynamicChart from '../dashboardComponents/charts/DynamicChart';
import { RiBarChartLine } from 'react-icons/ri';

const SalesReport = forwardRef(({ period, salesData }, ref) => {

    const currentDate = new Date();


    const filterSalesData = () => {
        const today = new Date();
        let filteredData = [];



        switch (period) {
            case 'thisWeek':
                const startOfWeek = new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    today.getDate() - today.getDay()
                );
                filteredData = salesData.filter((sale) => {
                    const saleDate = new Date(sale.createdAt);
                    return (
                        saleDate >= startOfWeek &&
                        saleDate <= today
                    );
                });
                break;
            case 'lastMonth':
                const startOfLastMonth = new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() - 1,
                    1
                );
                const endOfLastMonth = new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    0,
                    23,
                    59,
                    59
                );
                filteredData = salesData.filter((sale) => {
                    const saleDate = new Date(sale.createdAt);
                    return (
                        saleDate >= startOfLastMonth &&
                        saleDate <= endOfLastMonth
                    );
                });
                break;
            case 'thisYear':
                const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
                filteredData = salesData.filter((sale) => {
                    const saleDate = new Date(sale.createdAt);
                    return (
                        saleDate >= startOfYear &&
                        saleDate <= today
                    );
                });
                break;
            default:
                filteredData = salesData;
                break;
        }

        return filteredData;
    };

    const calculateMetrics = (data) => {
        const totalSales = data.reduce((total, sale) => total + sale.totalPrice, 0);
        const income = data.reduce((total, sale) => total + sale.amount, 0);
        const itemsSold = data.reduce((total, sale) => total + sale.quantitySold, 0);
        return { totalSales, income, itemsSold };
    };


    const filteredSalesData = filterSalesData();
    const { totalSales, income, itemsSold } = calculateMetrics(filteredSalesData);


    const prepareIncomeChartData = () => {
        const dataByDate = {};

        filteredSalesData.forEach((sale) => {
            const saleDate = new Date(sale.createdAt).toLocaleDateString();
            if (!dataByDate[saleDate]) {
                dataByDate[saleDate] = 0;
            }
            dataByDate[saleDate] += sale.amount;
        });

        const chartLabels = Object.keys(dataByDate);
        const chartData = Object.values(dataByDate);

        return { labels: chartLabels, data: chartData };
    };

    const { labels: chartLabels, data: chartData } = prepareIncomeChartData();

    const isSalesDataEmpty = !filteredSalesData || filteredSalesData.length === 0;
    if (isSalesDataEmpty) {
        return (
            <div className="text-red-500 font-bold">No data found</div>
        )
    }


    return (
        <div className="p-4 flex flex-col gap-4" ref={ref}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md p-4 col-span-full flex items-center justify-start">
                    <img src="https://t4.ftcdn.net/jpg/01/42/10/77/360_F_142107708_x8O3SGeiN5zJxqPUeSXuHnQpJugE34Xq.jpg" width={200} height={200} />

                    <div>
                        <h2 className="text-xl font-bold">Sales Report for {period}</h2>
                        <p className="mb-1">Total Sales: MWK{totalSales}</p>
                        <p className="mb-1">Income: MWK{income}</p>
                        <p>Items Sold: {itemsSold}</p>
                    </div>
                </div>

                {/* Lower cards */}
                <div className="col-span-1 bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-4">Income Over Time</h2>
                    <div className="h-80">
                        <DynamicChart
                            chartType="line"
                            labels={chartLabels}
                            datasets={[
                                {
                                    label: 'Income',
                                    data: chartData,
                                    borderColor: 'blue',
                                    borderWidth: 1,
                                    fill: false,
                                },
                            ]}
                        />
                    </div>
                </div>

                <div className="col-span-1 bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-bold mb-4">Sales Data</h2>
                    <table className="table-auto w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border">No.</th>
                                <th className="px-4 py-2 border">Product Name</th>
                                <th className="px-4 py-2 border">Quantity Sold</th>
                                <th className="px-4 py-2 border">Amount</th>
                                <th className="px-4 py-2 border">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredSalesData.map((sale, i) => (
                                <tr key={sale._id} className="border-b">
                                    <td className="px-4 py-2 border">{i + 1}</td>
                                    <td className="px-4 py-2 border">{sale.productName}</td>
                                    <td className="px-4 py-2 border">{sale.quantitySold}</td>
                                    <td className="px-4 py-2 border">MWK{sale.amount}</td>
                                    <td className="px-4 py-2 border">MWK{sale.totalPrice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
});

export default SalesReport;
