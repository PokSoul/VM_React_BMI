import React from 'react';
import ReactEcharts from 'echarts-for-react';
import PropTypes from 'prop-types';

const Line = ({ labelData, bmiData, weightData }) => {
  const line = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Weight', 'BMI'],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: labelData,
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Weight',
        type: 'line',
        smooth: true,
        data: weightData,
      },
      {
        name: 'BMI',
        type: 'line',
        smooth: true,
        data: bmiData,
      },
    ],
  };
  return (
    <div>
      <ReactEcharts option={line} />
    </div>
  );
};

Line.propTypes = {
  labelData: PropTypes.array,
  bmiData: PropTypes.array,
  weightData: PropTypes.array,
};

export default Line;
