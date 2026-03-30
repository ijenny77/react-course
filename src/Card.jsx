import PFP from './assets/mee.jpeg'
function Card(){
    return(
        <div className="card">
            <img className='card-image' src={PFP} alt="This is meee" />
            <h2 className='card-title'>Jenny ISHIMWE</h2>
            <p className='card-text'>I am Full Stack developer</p>
        </div>
    );
}
export default Card