import React,{useState} from 'react'
function Component() {
    const [name,setName] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] =useState("")
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value)
    }
    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }
    const handlePaymentChange = (event) => {
        setPayment(event.target.value)
    }
    const handleShippingChange = (event) => {
        setShipping(event.target.value)
    }
 
    return(
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Welcome {name}</p>

            <input value={quantity} type='number' onChange={handleQuantityChange} />
            <p>The Quantity: {quantity} </p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />Pick up
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>Delivery
            <p>Shipping: {shipping}</p>
        </div>
    );
}
export default Component