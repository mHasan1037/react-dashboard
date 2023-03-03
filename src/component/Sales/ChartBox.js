import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartBox = ({ chartConfig }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current && chartConfig) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const { type, data, options } = chartConfig;
      chartInstanceRef.current = new Chart(chartRef.current, {
        type,
        data,
        options
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [chartConfig]);

  return (
    <div style={{width: '100%'}}>
      <canvas ref={chartRef} style={{width: '100%', marginTop: '25px', maxHeight: '140px'}} />
    </div>
  );
};

export default ChartBox;