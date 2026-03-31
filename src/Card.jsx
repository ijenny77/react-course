import PFP from './assets/mee.jpeg'
import propTypes from 'prop-types'
function Card(props){
    return(
        <div className="card">
            <img className='card-image' src={PFP} alt="This is meee" />
            <h2 className='card-title'>Name: {props.name}</h2>
            <p className='card-text'>Title: {props.title}</p>
            <p>Designer: {props.isDesigner ? "Yes" : "No"}</p>
        </div>
    );
}
Card.propTypes = {
    name:propTypes.string,
    title:propTypes.string,
    isDesigner:propTypes.bool,
}
Card.defaultProps = {
    name:"Guest",
    title:"Employee",
    isDesigner:false,
}
export default Card