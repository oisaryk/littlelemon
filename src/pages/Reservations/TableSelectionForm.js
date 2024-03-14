import React from 'react';
import TableForTwo from "../../assets/seats/2.png";
import TableForTwoOrFour from "../../assets/seats/2-4.png";
import TableForFourOrEight from "../../assets/seats/4-8.png";
import TableForFiveOrEight from "../../assets/seats/5-8.png";
import TableForSixOrEight from "../../assets/seats/6-8.png";

// Yes, number like 2_4 is a valid number
const tables = [
    {image: TableForTwo, data: 2},
    {image: TableForTwoOrFour, data: 2_4},
    {image: TableForFourOrEight, data: 4_8},
    {image: TableForFiveOrEight, data: 5_8},
    {image: TableForSixOrEight, data: 6_8}
];

const TableSelectionForm = ({  handleTableSelection, selectedTable }) => {
    return (
        <div>
            <div className="table-selection">
                {tables.map((table, index) => (
                    <div key={index} className={'active table' ? selectedTable : 'table'}
                         onClick={() => handleTableSelection(table.data)}>
                            <img src={table.image} alt={`Table for ${table.data}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TableSelectionForm