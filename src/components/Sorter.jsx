/* eslint-disable react/prop-types */

const Sorter = ({ sortOrder, sortData }) => {
    return (
        <div>
            <label>
                Sort by:
                <select
                    value={sortOrder}
                    onChange={(e) => sortData(e.target.value)}
                >
                    <option value="none">None</option>
                    <option value="lowToHighData">Low to High (Data)</option>
                    <option value="highToLowData">High to Low (Data)</option>
                    <option value="lowToHighX">Low to High (X-axis)</option>
                    <option value="highToLowX">High to Low (X-axis)</option>
                </select>
            </label>
        </div>
    );
};

export default Sorter;
