import React, {useState} from 'react';
import "../../styles/ReservationsContent.css";
import ReservationForm from "./ReservationForm";
import TableSelectionForm from "./TableSelectionForm";

function ReservationsPage() {

    const [selectedTable, setSelectedTable] = useState(2);

    const handleTableSelection = (table) => {
        if (table) {
            setSelectedTable(table);
        }
    }

  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className="res-form">
                <h1>Reserve a Table</h1>
                <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                <ReservationForm selectedTable={selectedTable}/>
            </div>
            <div className="res-form">
                <h1>Select your table</h1>
                <p>Please click on table you like to reserve.</p>
                <TableSelectionForm handleTableSelection={handleTableSelection} selectedTable={selectedTable} />
            </div>
        </div>
    </div>
  )
}

export default ReservationsPage