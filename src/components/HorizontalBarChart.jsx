import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useSort } from "../helpers/useSort";
import Sorter from "./Sorter";

ChartJS.register(BarElement, Tooltip, Legend, ChartDataLabels);

const initialData = [
    { x: 1, y: 100 },
    { x: 2, y: 2000 },
    { x: 3, y: 700 },
    { x: 4, y: 1000 },
    { x: 5, y: 3500 },
];

function HorizontalBarChart() {
    const { sortOrder, chartData, sortData } = useSort(initialData);

    const horizontalBarData1 = {
        labels: chartData.map((item) => item.x),
        datasets: [
            {
                axis: "y",
                data: chartData.map((item) => item.y),
                backgroundColor: "#F3A700",
                borderRadius: 4,
            },
        ],
    };

    const horizontalBarOptions1 = {
        indexAxis: "y",
        scales: {
            x: {
                beginAtZero: true,
                max: 4000,
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: false,
            datalabels: false,
        },
        barPercentage: 0.5,
        categoryPercentage: 0.8,
    };

    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Sorter sortOrder={sortOrder} sortData={sortData} />
            <div
                style={{
                    height: "500px",
                    position: "relative",
                    width: "800px",
                }}
            >
                <Bar
                    data={horizontalBarData1}
                    options={horizontalBarOptions1}
                />
            </div>
        </div>
    );
}

export default HorizontalBarChart;
