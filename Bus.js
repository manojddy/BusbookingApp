import BusColumn from "../BusColumn/BusColumn";
import './index.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Bus = () => {
    const [seatData, setSeatData] = useState([])

    useEffect(() => {
        axios.get('/seatData').then(response => {
            response.status(200)
            setSeatData(response.json())
        })
    },[])


    //onHandle the confirm booking button
    const onHandleButton = () => {
        alert("your tickets has been booked");
    }

    //creating the seat columns
    const seatColumns = ['1','2','3','4']
    //creating seatrows
    const seatRows = ['A','B','C','D','E','F','G','H']

    //generating the seats below
    const generateSeat = () => {
        <div className="bus">
            <table>
                <tbody>
                    <BusColumn seatColumns={seatColumns} />
                    {seatRows.map((row,index) => 
                    row === ''
                    ?
                    <tr key="index" className="seat" /> 
                    :
                    <tr>
                        <td key={index}>{row}</td>
                        {seatColumns.map((column,index) =>
                        column === ''
                        ?
                        <td key={index} />
                        :
                        <td key={index} className="seat" >
                            <tr key={index}>
                                <input type="checkbox" className="seating" id={`${row}${column}`} value={`${row}${column}`} />
                            </tr>
                        </td>
                        
                        )}
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    }

    //returning the Jsx function
    return(
        <div className="container">
            <h1>Please select seats</h1>
            {generateSeat()}
            <div>
                <button onClick={onHandleButton}>confirm booking</button>
            </div>
        </div>
    )
}

export default Bus;