import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Typography from '@mui/material/Typography';

const PieChartWithText = () => {
  return (
    <div className="flex shadow-lg bg-white rounded-md p-4" style={{ textAlign: 'left' }}>
    <div> 
    {/* Pie Chart */}
    <PieChart
    colors={['purple', 'blue', 'orange']}
    series={[
    {
      data: [{ id: 0, value: 10, color: 'purple' },
      { id: 1, value: 15, color: 'blue' },
      { id: 2, value: 20, color: 'orange' },],
      innerRadius: 20,
      outerRadius: 50,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -90,
      endAngle: 180,
      cx: 55,
      cy: 45,
    }]}
    width={130}
    height={100}/>
    </div>
    <div>
      {/* Text Description */}
      <Typography variant="h6" gutterBottom>
        Total Number Of Visitors
      </Typography>
      <Typography variant="body2">
        10%
      </Typography>
      </div>
    </div>
  );
};

export default PieChartWithText;
