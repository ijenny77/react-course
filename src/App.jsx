import Header from './Header.jsx'
import Footer from './footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import MyComponent from './Mycomponent.jsx'
import Counter from './Counter.jsx'
import Component from './Component.jsx'
import ColorPicker from './ColorPicker.jsx'
import Components from './Components.jsx'
import UpdateList from './UpdateList.jsx'
import Componentss from './Componentss.jsx'
function App(){
    const fruits = [
        {id:1 , name: 'Apple', calories: 95},
        {id:2 , name:'Orange', calories: 45 },
        {id:3 , name:'Banana', calories: 105 },
        {id:4 , name:'Watermelon', calories:159},
        {id:5 , name:'coconut',calories:37}
    ];
    const vegetables = [
        {id:6 , name: 'Potatoes', calories: 110},
        {id:7 , name:'Celery', calories: 15 },
        {id:8 , name:'Carrots', calories: 25 },
        {id:9 , name:'Corn', calories:63},
        {id:10 , name:'Broccoli',calories:50}
    ];

    return(
        <>
            <Header/>
            <UserGreeting isLoggedIn={true} username='Jenny' />
            <Food/>
            <Card name="Eunice" title="Chief Marketing Officer" isDesigner={true}/>
            <Card name="Jenny" title="Chief Financial Officer" isDesigner={true}/>
            <Card name="Angella" title="Chief Operating Officer"isDesigner={false}/>
            <Card name="Lina" title="Chief Executive Officer" isDesigner={false}/>
            <Card/>
            <Card/>
            {fruits.length > 0 && <List items={fruits} category ="Fruits"/>}
            {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
            <Button/>
            <MyComponent/>
            <Counter/>
            <Component/>
            <ColorPicker/>
            <Components/>
            <UpdateList/>
            <Componentss/>
            <Footer/> 
        </>
    );
}

export default App