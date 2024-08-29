import React from "react";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
    ChartDataLabels
);

function App() {
    // Bar Chart Examples
    const barData1 = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
        ],
    };

    const barOptions1 = {
        scales: {
            x: {
                ticks: {
                    callback: function (value, index) {
                        if (index === 0)
                            return (
                                "Minimum Votes - " +
                                this.getLabelForValue(value)
                            );
                        if (index === this.getLabelForValue.length - 1)
                            return (
                                this.getLabelForValue(value) +
                                " - Maximum Votes"
                            );
                        return this.getLabelForValue(value);
                    },
                },
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.parsed.y}`;
                    },
                },
            },
            datalabels: {
                anchor: "end",
                align: "top",
                formatter: (value) => value,
            },
        },
    };

    // Horizontal Bar Chart Example
    const horizontalBarData1 = {
        labels: ["Running", "Swimming", "Eating", "Cycling", "Sleeping"],
        datasets: [
            {
                axis: "y",
                label: "Hours",
                data: [2, 1.5, 1, 3, 8],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                ],
            },
        ],
    };

    const horizontalBarOptions1 = {
        indexAxis: "y",
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    callback: function (value, index) {
                        if (index === 0) return "Min Hours - " + value;
                        if (index === this.ticks.length - 1)
                            return value + " - Max Hours";
                        return value;
                    },
                },
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.parsed.x}`;
                    },
                },
            },
            datalabels: {
                anchor: "end",
                align: "right",
                formatter: (value) => value,
            },
        },
    };

    // Pie Chart Example
    const pieData1 = {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    const pieOptions1 = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const dataset = context.dataset;
                        const total = dataset.data.reduce(
                            (acc, data) => acc + data,
                            0
                        );
                        const value = dataset.data[context.dataIndex];
                        const percentage = ((value / total) * 100).toFixed(1);
                        return `${context.label}: ${percentage}%`;
                    },
                },
            },
            datalabels: {
                formatter: (value, ctx) => {
                    const dataset = ctx.chart.data.datasets[0];
                    const total = dataset.data.reduce(
                        (acc, data) => acc + data,
                        0
                    );
                    const percentage = ((value / total) * 100).toFixed(1);
                    return percentage + "%";
                },
                color: "#fff",
                font: {
                    weight: "bold",
                    size: 16,
                },
            },
        },
    };

    // Doughnut Chart Example
    const doughnutData1 = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
        datasets: [
            {
                data: [300, 50, 100, 40, 120],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                ],
            },
        ],
    };

    const doughnutOptions1 = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const dataset = context.dataset;
                        const total = dataset.data.reduce(
                            (acc, data) => acc + data,
                            0
                        );
                        const value = dataset.data[context.dataIndex];
                        const percentage = ((value / total) * 100).toFixed(1);
                        return `${context.label}: ${percentage}%`;
                    },
                },
            },
            datalabels: {
                formatter: (value, ctx) => {
                    const dataset = ctx.chart.data.datasets[0];
                    const total = dataset.data.reduce(
                        (acc, data) => acc + data,
                        0
                    );
                    const percentage = ((value / total) * 100).toFixed(1);
                    return percentage + "%";
                },
                color: "#fff",
                font: {
                    weight: "bold",
                    size: 16,
                },
            },
        },
    };

    return (
        <>
            <h1>Chart.js Examples</h1>

            <h2>Bar Chart (Vertical)</h2>
            <Bar data={barData1} options={barOptions1} />

            <h2>Bar Chart (Horizontal)</h2>
            <Bar data={horizontalBarData1} options={horizontalBarOptions1} />

            <h2>Pie Chart</h2>
            <Pie data={pieData1} options={pieOptions1} />

            <h2>Doughnut Chart</h2>
            <Doughnut data={doughnutData1} options={doughnutOptions1} />
        </>
    );
}

export default App;
