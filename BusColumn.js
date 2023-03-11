const BusColumn = ({seatColumn}) => {
    return(
        <tr>{seatColumn.map((column,index) => <td key={index}>{column}</td>)}</tr>
    )
}

export default BusColumn;