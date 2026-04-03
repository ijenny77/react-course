import react,{useState} from 'react'

function Componentss() {
    const [cars,setCars] = useState([])
    const [year,setYear] = useState(new Date().getFullYear())
    const [make,setMake] = useState("")
    const [model,setModel] = useState("")

    function handleAddCar(){
        const newCar = {year:year,make:make,model:model}
        setCars(c => [...c,newCar])

        setYear(new Date().getFullYear())
        setMake("")
        setModel("")
    }
    function handleRemoveCar(index){
        setCars(c => c.filter((_,i) => i !== index))
    }
    function handleYearChange(event){
        setYear(event.target.value)
    }
    function handleMakeChange(event){
        setMake(event.target.value)
    }
    function handleModelChange(event){
        setModel(event.target.value)
    }


    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car,index) => <li onClick={() => handleRemoveCar(index)} key={index}>{car.year} {car.make} {car.model}</li>)}
            </ul>
            <input type="number" value={year} onChange={handleYearChange} />
            <input type="text" value={make} onChange={handleMakeChange} placeholder='Enter car Make'/>
            <input type="text" value={model} onChange={handleModelChange} placeholder='Enter the Car Model' />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}
export default Componentss