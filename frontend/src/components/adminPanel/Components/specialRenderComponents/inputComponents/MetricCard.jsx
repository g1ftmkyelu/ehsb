import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MoonLoader } from "react-spinners";

import { useGetResourceCount } from "../../../utils/getAPI";

const MetricCard = ({ index, metric }) => {
  const { data, isLoading } = useGetResourceCount(metric.path, metric.dataSource);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <MoonLoader color="#1400ff" />
      </div>
    );
  }

  return (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md mx-2 border border-gray-200">
      <div className="flex items-center p-4">
        {metric.icon && (
          <div className="bg-gray-200 p-3 rounded-full mr-4">
            <metric.icon className="text-3xl" style={{ color: metric.color }} />
          </div>
        )}
        <div>
          <h2 className="text-xl font-semibold" style={{ color: metric.color }}>
            {metric.title}
          </h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-700">{data}</p>
        </div>
      </div>
      {metric.seeMore && (
        <Link
          to={`/${metric.path}`}
          className="block  hover:bg-blue-600 text-white font-semibold py-2 px-4 text-center transition duration-300 ease-in-out"
        >
          <div className="flex items-center justify-center">
            <span className="mr-2">See All</span>
            <FaArrowAltCircleRight />
          </div>
        </Link>
      )}
    </div>
  );
};

export default MetricCard;
