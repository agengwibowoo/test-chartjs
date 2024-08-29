import { useState } from "react";

export function useSort(initialData) {
    const [sortOrder, setSortOrder] = useState("none");
    const [chartData, setChartData] = useState(initialData);

    const sortData = (order) => {
        let sortedData = [...chartData];
        switch (order) {
            case "lowToHighData":
                sortedData.sort((a, b) => a.y - b.y);
                break;
            case "highToLowData":
                sortedData.sort((a, b) => b.y - a.y);
                break;
            case "lowToHighX":
                sortedData.sort((a, b) => a.x - b.x);
                break;
            case "highToLowX":
                sortedData.sort((a, b) => b.x - a.x);
                break;
            default:
                sortedData = initialData;
        }
        setChartData(sortedData);
        setSortOrder(order);
    };

    return { sortOrder, chartData, sortData };
}
