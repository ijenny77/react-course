import PropTypes from 'prop-types'
function List({category = "Category", items = [] }) {
    
    // fruits.sort((a,b)=>a.name.localeCompare(b.name))  //Alphabetical order
    // fruits.sort((a,b)=>b.name.localeCompare(a.name))  //reverse alphabetical order 
    // fruits.sort((a,b)=>b.calories - a.calories)    //Numeric  
    // fruits.sort((a,b)=>a.calories - b.calories)    //reverse numeric

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalfruits = fruits.filter(fruit => fruit.calories > 100);

    // const LowCaloriesFruits = lowCalFruits.map(lowCalFruits =><li key={lowCalFruits.id}>{lowCalFruits.name} : &nbsp;<b>{lowCalFruits.calories}</b></li>)
    // const HighCaloriesFruits = highCalfruits.map(highCalfruits => <li key={highCalfruits.id}>{highCalfruits.name} : &nbsp;<b>{highCalfruits.calories}</b></li>)

    const itemList = items
    const listItems = itemList.map(item => <li key= {item.id}>{item.name}:&nbsp; <b>{item.calories}</b></li>)
    return(
    <>
        {/* <ul>Low Calories Fruits:{LowCaloriesFruits}</ul>
        <ul>High Calories Fruits:{HighCaloriesFruits}</ul> */}
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
    </>
    );
}
List.propTypes ={
    category : PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,name:PropTypes.string,calories:PropTypes.number}))
}
List.defaultProps = {
    category : "category",

}
export default List