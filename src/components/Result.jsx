import React from "react";

function Result({ data }) {
    const calculateTotalPrice = () => {
        if (data && data.length > 0) {
            const totalPrice = data.reduce((total, item) => total + item.price, 0);
            return totalPrice.toFixed(2);
        }
        return "0.00";
    };
    return (
        <>
            {data ? (
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.module.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </table>
                    <h2>Total Price: {calculateTotalPrice()}</h2>
                </div>
            ) : (<h2>Add to card</h2>)}
        </>
    );
}

export default Result;
