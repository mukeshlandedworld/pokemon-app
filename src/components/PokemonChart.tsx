// PokemonChart.tsx
import React from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type ChartProps = {
  chartOptions: any;
  chartSeries: any;
};

const PokemonChart: React.FC<ChartProps> = ({ chartOptions, chartSeries }) => {
  return (
    <div>
      <ReactApexChart 
        type="bar" 
        options={chartOptions} 
        series={chartSeries} 
        height={400} 
      />
    </div>
  );
};

export default PokemonChart;
