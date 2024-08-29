import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useSort } from "../helpers/useSort";
import Sorter from "./Sorter";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ChartDataLabels
);

const initialData = [
    { x: 1, y: 1200 },
    { x: 2, y: 1500 },
    { x: 3, y: 1800 },
    { x: 4, y: 1600 },
    { x: 5, y: 1700 },
    { x: 6, y: 2000 },
    { x: 7, y: 1700 },
    { x: 8, y: 1200 },
    { x: 9, y: 800 },
    { x: 10, y: 1000 },
];

function VerticalBarChart() {
    const { sortOrder, chartData, sortData } = useSort(initialData);

    const barData1 = {
        labels: chartData.map((item) => item.x),
        datasets: [
            {
                data: chartData.map((item) => item.y),
                backgroundColor: "#F3A700",
                borderRadius: 4,
            },
        ],
    };

    const barOptions1 = {
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                max: 2200,
                ticks: {
                    display: false,
                },
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
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `Votes: ${context.parsed.y}`;
                    },
                },
            },
            datalabels: {
                anchor: "end",
                align: "top",
                formatter: (value) => value,
            },
        },
        barPercentage: 0.5,
        categoryPercentage: 0.8,
        layout: {
            padding: {
                left: 50,
                right: 50,
            },
        },
    };

    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Sorter sortOrder={sortOrder} sortData={sortData} />
            <div
                style={{
                    height: "430px",
                    position: "relative",
                    width: "800px",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: -75,
                        bottom: 40,
                        transform: "translateY(-50%)",
                    }}
                >
                    Minimum Votes
                </div>
                <div
                    style={{
                        position: "absolute",
                        right: -75,
                        bottom: 40,
                        transform: "translateY(-50%)",
                    }}
                >
                    Maximum Votes
                </div>
                <Bar data={barData1} options={barOptions1} />
            </div>
        </div>
    );
}

export default VerticalBarChart;
