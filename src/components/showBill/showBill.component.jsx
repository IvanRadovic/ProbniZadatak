const ShowBill = ({ billData  }) => {
    return ( 
        <div>
            {/* <h3>Bill Details:</h3> */}
            <div style={{display:'flex', gap:'30px'}}>
                <p>Ime</p>
                <p>Cijena</p>
            </div>

            {billData.map((data) => (
                <div style={{ display:'flex', gap:'30px'}} key={data.name}>
                <p>{data.name}</p>
                <p>{data.amount}</p>
                </div>
            ))}
        </div>

     );
}
 
export default ShowBill;