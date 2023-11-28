import React from 'react';
import { useQuery }  from '@tanstack/react-query';
import axios from 'axios';
import DynamicChart from './DynamicChart';
import { MoonLoader } from 'react-spinners';
import { getToken } from '../../../utils/helperFunctions';

const PieChart = ({ resource, chartType, fieldName }) => {
    const authToken = getToken()

    const { isLoading, isError, data } = useQuery(['fieldOccurrences', fieldName], () =>
      axios.get(`https://ehcs.onrender.com/${resource}/fieldOcurrences?fieldName=${fieldName}`, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Set the Authorization header
        },
      })
      .then(response => response.data)
    );

  if (isLoading) {
    return (
        <div className="flex items-center justify-center">
            <MoonLoader color="#1400ff" />
        </div>
    );
}

  if (isError || !data || !data.occurrences) {
    return <p>Error fetching data</p>;
  }

  const { occurrences } = data;

  const labels = Object.keys(occurrences);
  const chartData = Object.values(occurrences);

  const pieChartDatasets = [
    {
      label: 'Field Occurrences',
      data: chartData,
      backgroundColor: generateRandomColors(labels.length), // Function to generate random colors
    },
  ];

  return (
    <div>
      <h2>Pie Chart for {resource}</h2>
      <DynamicChart
        chartType={chartType}
        labels={labels}
        datasets={pieChartDatasets}
      />
    </div>
  );
};

// Function to generate random colors (You can use a library like 'randomcolor' for better color generation)
const generateRandomColors = (count) => {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`;
    colors.push(color);
  }
  return colors;
};

export default PieChart;
