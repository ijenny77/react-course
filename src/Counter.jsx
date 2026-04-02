import React,{useState} from 'react'
function Counter(){
    const [count,setCount] = useState(0) 

    const incrementNum = () => {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }
    const decrementNum = () => {
        setCount(c =>c - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return(
        <div className='counter-container'>
            <p className='counter-display'>Number: {count}</p>
            <button className='counter-button' onClick={incrementNum}>Increment Number</button>
            <button className='counter-button' onClick={decrementNum}>Decrement Number</button>
            <button className='counter-button' onClick={reset}>Reset</button>
        </div>
    );
}
export default Counter