import React from 'react';
import PieChart from '../dashboardComponents/charts/PieChart';
import ResourceRender from '../coreComponents/ResourceRender';

const WidgetRenderer = ({ rdata }) => {

    const { tableResource, chartData } = rdata  

    return (
        <div className="flex items-baseline">
            <div className='p-4 m-5 bg-white shadow-md' style={{ width: '700px' }}>

                <ResourceRender data={tableResource}/>
            </div>
            <div className='p-5 m-5 bg-white shadow-md rounded-lg'>


                <div className='p-5 m-5 shadow-md rounded-lg flex-1'>
                    <div style={{ width: '600px'}}>

                        <PieChart
                            chartType={chartData.chartType}
                            resource={chartData.resource}
                            fieldName={chartData.fieldName}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WidgetRenderer;
