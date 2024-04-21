import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55, 40], // [65, 59, 80, 81, 56, 55, 40
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [28, 48, 40, 19, 86, 27, 90], // [28, 48, 40, 19, 86, 27, 90
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export function BarChart() {
    return (
        <div style={{ height: "60vh", position: "relative", marginBottom: "1%", padding: "1%" }}>
            <Bar options={options} data={data} width="10px" height="10px" />
        </div>
    )

}
