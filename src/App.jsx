import DoughnutChart from "./components/DoughnutChart";
import HorizontalBarChart from "./components/HorizontalBarChart";
import VerticalBarChart from "./components/VerticalBarChart";

function App() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "auto",
            }}
        >
            <VerticalBarChart />
            <HorizontalBarChart />
            <DoughnutChart />
        </div>
    );
}

export default App;
