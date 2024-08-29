import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function DoughnutChart() {
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
            legend: {
                display: false,
            },
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
        <div
            style={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    height: "500px",
                    position: "relative",
                    width: "500px",
                }}
            >
                <Doughnut data={doughnutData1} options={doughnutOptions1} />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                    }}
                >
                    <div style={{ fontSize: 24, fontWeight: "bold" }}>4600</div>
                    <div style={{ fontSize: 18, color: "#8189a2" }}>
                        Responses
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoughnutChart;
