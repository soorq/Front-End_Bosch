'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  type ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);
export const options: ChartOptions<'line'> = {
  // responsive: true,
  showLine: true,
  color: 'rgba(255, 255, 255, 1)',
  elements: {
    arc: {
      hoverBorderColor: 'rgba(255, 255, 255, 1)',
      borderJoinStyle: 'bevel',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      spacing: 4,
      borderColor: '#ffff',
    },
    line: {
      tension: 0.00001,
      borderWidth: 3,
      borderColor: 'rgba(255, 255, 255, 1)',
      backgroundColor:
        'linear-gradient(to right, rgba(255,255,255), rgba(255,255,255,0))',
    },
  },
  maintainAspectRatio: false,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Subscribers',
      data: labels.map(() => Math.floor(Math.random() * 100)),
      borderColor: '#7214FF',
      backgroundColor: 'rgba(114, 20, 255, 0.29)',
    },
  ],
};

export const AnalyticChart = () => {
  return (
    <Line
      options={options}
      data={data}
      className="max-w-[300px] sm:max-w-sm md:max-w-md lg:w-fit"
    />
  );
};
