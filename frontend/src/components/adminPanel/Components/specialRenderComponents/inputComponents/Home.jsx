import React, { useState } from 'react';
import DashboardCardSection from './DashboardCardSection';
import WidgetRenderer from '../WidgetRenderer';

const Home = ({ widgetConfig, metrics }) => {
  return (
    <div className=''>
      <div className="">
        <DashboardCardSection {...{ metrics }} />
      </div>

      <div className='m-10'>
        {widgetConfig ? (
          <WidgetRenderer rdata={widgetConfig} />
        ) : (
          <p>No widget configuration found.</p> // You can render a default message or component
        )}
      </div>
    </div>
  );
};

export default Home;
